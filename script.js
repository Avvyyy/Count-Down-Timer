$(document).ready(function () {
	//Setting the deadline for the countdown date in milliseconds
	let countDownDate = new Date("2024-04-04:11:30").getTime();

	let countDown = setInterval(() => {

		const currentDate = new Date().getTime();

		const timeLeft = countDownDate - currentDate;

		const dayLeft = Math.floor(timeLeft / (1000 * 24 * 60 * 60));
		const monthLeft = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
		const minutesLeft = Math.floor(timeLeft % (1000 * 60 * 60)/ (1000 * 60));
		const secondsLeft = Math.floor(timeLeft % (1000 * 60) / 1000);

		$('.day_digit').text(dayLeft);
		$('.hour_digit').text(monthLeft);
		$('.minute_digit').text(minutesLeft);
		$('.seconds_digit').text(secondsLeft);


		if(timeLeft < 0) {
			clearInterval(countDown);
		$('.timer').html('<span class="text-red-500 font-bold text-3xl text-center">Giveaway Has Expired!</span>');
		}
	}, 1000);

})