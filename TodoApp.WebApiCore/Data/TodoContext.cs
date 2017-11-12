using Microsoft.EntityFrameworkCore;
using TodoApp.WebApiCore.Models;

namespace TodoApp.WebApiCore.Data
{
    public class TodoContext : DbContext
    {
        public TodoContext (DbContextOptions<TodoContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Todo> Todo { get; set; }
    }
}
