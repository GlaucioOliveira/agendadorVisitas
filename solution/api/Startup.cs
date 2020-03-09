using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using db.Interfaces;
using db.Models;

namespace api
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
            // requires using Microsoft.Extensions.Options
            services.Configure<DatabaseSettings>(
                Configuration.GetSection(nameof(DatabaseSettings)));
            
            services.AddSingleton<IDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<DatabaseSettings>>().Value);

            ConfigureDatabaseServices(services);

            services.AddCors();
            services.AddControllers();
        }

        private void ConfigureDatabaseServices(IServiceCollection services)
        {
            var IDatabaseServiceType = typeof(IDatabaseService);

            var DatabaseServicesTypeList = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(s => s.GetTypes())
                .Where(p => IDatabaseServiceType.IsAssignableFrom(p) && p != IDatabaseServiceType);

            foreach (var DatabaseServiceType in DatabaseServicesTypeList)
            {
                services.AddSingleton(DatabaseServiceType);
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UsePathBase("/dev");

            //app.UseCors( b =>
            //{
            //    b.WithOrigins("http://127.0.0.1:5500/", "http://localhost/");
            //});
            //app.UseCors(x => x.AllowAnyHeader());
            //app.UseCors(x => x.AllowAnyMethod());
            //app.UseCors(option => option.AllowAnyOrigin());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(option => option
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        );

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
