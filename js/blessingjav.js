var endDate = new Date("Mar 15, 2019 12:00:00").getTime();

var timer = setInterval(function() {

    let now = newDate().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'>DAY(S)</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>HR(S)</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'>MIN(S)</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
        "<span class='label'>SEC(S)</span>";
    
    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);

<table class="countdownContainer">
			<tr class="info">
				<td colspan="4">Christmas Countdown</td>
			</tr>
			<tr class="info">
				<td id="days">120</td>
				<td id="hours">4</td>
				<td id="minutes">12</td>
				<td id="seconds">22</td>
			</tr>
			<tr>
				<td>Days</td>
				<td>Hours</td>
				<td>Minutes</td>
				<td>Seconds</td>
			</tr>
		</table>

<script type="text/javascript">
 
 function countdown(){
     var now = new Date();
     var eventDate = new Date(2016, 11, 25);

     var currentTiime = now.getTime();
     var eventTime = eventDate.getTime();

     var remTime = eventTime - currentTiime;

     var s = Math.floor(remTime / 1000);
     var m = Math.floor(s / 60);
     var h = Math.floor(m / 60);
     var d = Math.floor(h / 24);

     h %= 24;
     m %= 60;
     s %= 60;

     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;

     document.getElementById("days").textContent = d;
     document.getElementById("days").innerText = d;

     document.getElementById("hours").textContent = h;
     document.getElementById("minutes").textContent = m;
     document.getElementById("seconds").textContent = s;

     setTimeout(countdown, 1000);
 }

 countdown();
</script>