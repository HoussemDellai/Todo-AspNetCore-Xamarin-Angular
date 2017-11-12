using System;

namespace TodoApp.WebApiCore.Models
{
    public class Todo
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Details { get; set; }

        public bool IsDone { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
