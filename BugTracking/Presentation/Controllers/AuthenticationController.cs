using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Presentation.Controllers
{
    public class AuthenticationController : Controller
    {
        public async Task<IActionResult> Index()
        {
            return View();
        }

    }
}