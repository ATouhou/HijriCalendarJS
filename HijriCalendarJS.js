											/**
     *
     * Calculates the islamic date for any day, month, year
     * Note:
     * This function ignores that one gregorian date maps to two islamic dates
     * Arguments:
     * $day        Day (1-31)
     * $month    Month (1-12)
     * $year    Any valid year
     * Returns:
     * $hijriDate    Array of "month" -> islamic month, "day" -> islamic day, "year" -> islamic year
     */
    function convertGregorianToHijri (day, month, year) {
      if ((year>1582)||((year==1582)&&(month>10))||((year==1582)&&(month==10)&&(day>14))) {
        var juliandate=this.intPart((1461*(year+4800+this.intPart((month-14)/12)))/4)+this.intPart((367*(month-2-12*(this.intPart((month-14)/12))))/12)-this.intPart((3*(this.intPart((year+4900+this.intPart((month-14)/12))/100)))/4)+day-32075;
      } else {
        juliandate = 367*year-this.intPart((7*(year+5001+intPart((month-9)/7)))/4)+this.intPart((275*month)/9)+day+1729777;
      }
      var l=juliandate-1948440+10632;
      var n=this.intPart((l-1)/10631);
      l=l-10631*n+354;
      var j=(this.intPart((10985-l)/5316))*(this.intPart((50*l)/17719))+(this.intPart(l/5670))*(this.intPart((43*l)/15238));
      l=l-(this.intPart((30-j)/15))*(this.intPart((17719*j)/50))-(this.intPart(j/16))*(this.intPart((15238*j)/43))+29;
      month=this.intPart((24*l)/709);
      day=l-this.intPart((709*month)/24);
      year=30*n+j-30;
      
      var hijriDate = {"month" : this.islamicMonth(month), "day" : day, "year" : year};
      
      return hijriDate;
    }									
