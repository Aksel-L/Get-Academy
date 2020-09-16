using System;

namespace box
{
    class program
    {
        static void Main(string[] args)
        {
            var x = Box();
            Console.WriteLine("Bredden er " + x.Width + "og høyden er " + x.Height);
        }
    }
}
