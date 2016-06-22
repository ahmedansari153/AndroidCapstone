using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Capstone.Migrations
{
    public partial class AddedProcessorType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "ScreenSize",
                table: "Phones",
                nullable: false);

            migrationBuilder.AddColumn<int>(
                name: "processorType",
                table: "Phones",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "processorType",
                table: "Phones");

            migrationBuilder.AlterColumn<string>(
                name: "ScreenSize",
                table: "Phones",
                nullable: true);
        }
    }
}
