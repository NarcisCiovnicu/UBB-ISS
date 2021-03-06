using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using System.Globalization;
using System.Reflection;

namespace Presentation
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddLocalization(options => options.ResourcesPath = "Resources");
            services.AddControllersWithViews()
                .AddViewLocalization(options => options.ResourcesPath = "Resources")
                .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix)
                .AddDataAnnotationsLocalization();
            services.Configure<RequestLocalizationOptions>(options => SetApplicationCultures(options));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error/Index");
            }

            app.UseStaticFiles();

            RequestLocalizationOptions localizationOptions = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>().Value;
            app.UseRequestLocalization(localizationOptions);

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints => AddRoutes(endpoints));
        }

        private void AddRoutes(IEndpointRouteBuilder endpoints)
        {
            endpoints.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}");
        }

        private void SetApplicationCultures(RequestLocalizationOptions options)
        {
            var defaultCulture = new RequestCulture("en");
            var supportedCultures = new[]
            {
                new CultureInfo("ro"),
                new CultureInfo("en"),
                new CultureInfo("fr")
            };
            options.DefaultRequestCulture = defaultCulture;
            options.SupportedCultures = supportedCultures;
            options.SupportedUICultures = supportedCultures;
        }
    }
}
