import { Injectable } from "@angular/core";

@Injectable()
export class DateRangeServices {
    currentDate = new Date();
    year = this.currentDate.getFullYear();
    month = this.currentDate.getMonth();
    day = this.currentDate.getDate();
    public options: any;
    rangeDate(){
        let languageCheck = localStorage.getItem("Language");
        if(languageCheck=="ar"){
            this.options = {
                locale: { format: 'MMMM D, YYYY' ,
                "separator": " - ",
                "applyLabel": "تأكيد",
                "cancelLabel": "ألغاء",
                "fromLabel": "من",
                "toLabel": "الي",
                "customRangeLabel": "تاريخ محدد",
                "daysOfWeek": [
                    "الاحد",
                    "الاثنين",
                    "الثلاثاء",
                    "الاربعاء",
                    "الخميس",
                    "الجمعة",
                    "السبت"
                ],
                "monthNames": [
                    "يناير",
                    "فبراير",
                    "مارس",
                    "ابريل",
                    "مايو",
                    "يونيو",
                    "يوليو",
                    "اغسطس",
                    "سبتمبر",
                    "اكتوبر",
                    "نوفمبر",
                    "ديسيمبر"
                ], },
                alwaysShowCalendars: false,
                ranges: {
                  'اليوم': [this.currentDate, this.currentDate],
                  'امس': [
                    new Date(this.year, this.month, this.day - 1),
                    new Date(this.year, this.month, this.day - 1)
                  ],
                  'اخر 7 ايام': [
                    new Date(this.year, this.month, this.day - 7),
                    this.currentDate
                  ],
                  'اخر 30 يوم': [
                    new Date(this.year, this.currentDate.getMonth(), this.day - 30),
                    this.currentDate
                  ],
                  'هذا الشهر': [
                    new Date(this.year, this.month, 1),
                    new Date(this.year, this.month + 1, 0)
                  ],
                  'اخر شهر': [
                    new Date(this.year, this.month - 1, 1),
                    new Date(this.year, this.month, 0)
                  ]
                }
              };
        }
        else{
        this.options = {
            locale: { format: 'MMMM D, YYYY' },
            alwaysShowCalendars: false,
            ranges: {
              Today: [this.currentDate, this.currentDate],
              Yesterday: [
                new Date(this.year, this.month, this.day - 1),
                new Date(this.year, this.month, this.day - 1)
              ],
              'Last 7 Days': [
                new Date(this.year, this.month, this.day - 7),
                this.currentDate
              ],
              'Last 30 Days': [
                new Date(this.year, this.currentDate.getMonth(), this.day - 30),
                this.currentDate
              ],
              'This Month': [
                new Date(this.year, this.month, 1),
                new Date(this.year, this.month + 1, 0)
              ],
              'Last Month': [
                new Date(this.year, this.month - 1, 1),
                new Date(this.year, this.month, 0)
              ]
            }
          };
        }
          return this.options;
    }
}