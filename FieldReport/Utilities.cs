using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FieldReport.Models;
using System.Text.RegularExpressions;

namespace FieldReport
{
    public static class Utilities
    {
        public const string NewLineSymbol = "#CnL";
        public const string htmlBreakLineTag = "<br />";

        public static string StoreInSQL(string str)
        {
            string NewString = "";
            for (int i = 0; i < str.Length; i++)
            {
                if (str[i] == (char)13 || str[i] == (char)10)
                {
                    NewString += NewLineSymbol;
                }
                else
                {
                    NewString += str[i];
                }
            }

            return NewString;
        }

        public static string BackToOldNativeString(string str)
        {
            string NewString = "";
            for (int i = 0; i < str.Length; i++)
            {
                if (str.Length - i > NewLineSymbol.Length)
                {
                    if (str.Substring(i, 4) == NewLineSymbol)
                    {
                        NewString += (char)10;
                        i += NewLineSymbol.Length - 1;
                    }
                    else
                    {
                        NewString += str[i];
                    }
                }
                else
                {
                    NewString += str.Substring(i);
                    break;
                }
            }

            return NewString;
        }

        public static string RenderTextTohtml(string str)
        {
            string NewString = "";
            for (int i = 0; i < str.Length; i++)
            {
                if (str.Length - i > NewLineSymbol.Length)
                {
                    if (str.Substring(i, 4) == NewLineSymbol)
                    {
                        NewString += "<br />";
                        i += NewLineSymbol.Length - 1;
                    }
                    else
                    {
                        NewString += str[i];
                    }
                }
                else
                {
                    NewString += str.Substring(i);
                    break;
                }
            }

            return NewString;
        }
    
        public static DateTime FindYoungestDate(IEnumerable<DateTime> dates)
        {
            DateTime maxDate = new DateTime(1, 1, 1);
            foreach (var date in dates)
            {
                if (maxDate < date)
                    maxDate = date;
            }
            return maxDate;
        }

        public static SimpleDate ToSimpleDate(this DateTime date)
        {
            return new SimpleDate(date);
        }

        public static string[] toWords(string str)
        {
            MatchCollection matches = Regex.Matches(str, @"\b[\w']*\b");

            var words = from m in matches.Cast<Match>()
                        where !string.IsNullOrEmpty(m.Value)
                        select TrimSuffix(m.Value);

            return words.ToArray();
        }

        private static string TrimSuffix(string word)
        {
            int apostropheLocation = word.IndexOf('\'');
            if (apostropheLocation != -1)
            {
                word = word.Substring(0, apostropheLocation);
            }

            return word;
        }
    }
}