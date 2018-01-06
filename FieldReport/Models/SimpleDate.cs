using System;
using System.ComponentModel.DataAnnotations;

namespace FieldReport.Models
{
    public class SimpleDate
    {
        public SimpleDate()
        {
        }

        public SimpleDate(DateTime date)
        {
            Day = (ushort)date.Day;
            Month = (ushort)date.Month;
            Year = (ushort)date.Year;
        }

        [Required]
        [Range(0,31)]
        public ushort Day { get; set; }

        [Required]
        [Range(0, 12)]
        public ushort Month { get; set; }

        [Required]
        [Range(2010, 2100)]
        public ushort Year { get; set; }

        public DateTime ToDateTime
        {
            get { return new DateTime(Year, Month, Day); }
        }

        public DateTime SetDate
        {
            set
            {
                this.Day = (ushort)value.Day;
                this.Year = (ushort)value.Year;
                this.Month = (ushort)value.Month;
            }
        }

        public static bool operator ==(SimpleDate sd1, SimpleDate sd2)
        {
            return sd1.Day == sd2.Day && sd1.Month == sd2.Month && sd1.Year == sd2.Year;
        }

        public static bool operator !=(SimpleDate sd1, SimpleDate sd2)
        {
            return sd1.Day != sd2.Day || sd1.Month != sd2.Month || sd1.Year != sd2.Year;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            string type = obj.GetType().Name;
            switch (type)
            {
                case "DateTime":
                    {
                        SimpleDate SD = ((DateTime)obj).ToSimpleDate();
                        return SD.Day == this.Day && SD.Month == this.Month && this.Year == SD.Year;
                    }

                case "SimpleDate":
                    {
                        SimpleDate SD = obj as SimpleDate;
                        return SD.Day == this.Day && SD.Month == this.Month && this.Year == SD.Year;
                    }

                default:
                    {
                        return false;
                    }
            }
        }
    }
}