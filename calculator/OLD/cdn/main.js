var points10k = 4;
var points100k = 38;
var points200k = 72;
var points500k = 170;

var CryptoConstFees = 0.5;
var PaypalConstFees = 3;
var TF2ConstFees = 2;


var TF2Value = 1.4;
var Discount = "";
var ConversionEuro = 1;
var ss = 5000;


let something = false;

function removeHRClass() {
	$(document).ready(function () {
		$("hr").removeClass();
	});
	something = true;
	console.log("once");
}

function functionOnce() {
	if (!something) removeHRClass();
}


function calculate(input) {
	functionOnce();
	functionOnce();
	if (input < 10000) {
		var Price = Math.ceil(((input / 10000) * points10k));

	}
	else if (input < 100000) {
		var Price = Math.ceil(((input / 10000) * points10k));

	}
	else if (input < 200000) {
		var Price = Math.ceil(((input / 100000) * points100k));
		Discount = "5%"
	}
	else if (input < 500000) {
		var Price = Math.ceil(((input / 200000) * points200k));
		Discount = "10%"
	}

	else if (input < 1000000) {
		var Price = Math.ceil(((input / 500000) * points500k));
		Discount = "15%"
	}


	else if (isNaN(input)) {
		var input = 0;
		var TotalCrypto = 0;;
		var TotalPaypal = 0;
		var TotalTF2 = 0;
	}


	TotalCrypto = Price + CryptoConstFees;
	TotalTF2 = Price + TF2ConstFees;
	TotalPaypal = Price + PaypalConstFees;

	var FinalLetter = input;
	FinalLetter = Number(FinalLetter).toLocaleString("en-EN").split(/\s/).join(',');

	if (input >= 1000000) {
		var TotalPriceString = "1 MILLION?? YOU CRAZYYY";
		var cryptoString = "MASHALLAH!";
		var tf2String = "Huge discount for orders above 1mill ofc!";
		var paypalString = "Please contact me directly on tele or discord for steam points over 1 million";
		var ssString = "Will only disclose price for serious buyers. Proof of funds will be required.";
	}

	else if (input >= 100000) {
		console.log(Discount)

		var TotalPriceString = "To purchase " + "<strong>" + FinalLetter + "</strong>" + " points will cost " + "<s style='text-decoration-thickness: 3px;'>$" + ((points10k * (input / 10000)) + CryptoConstFees) + "</s> " + "<strong>$" + TotalCrypto + "</strong>" + " <br>You got automatically " + Discount.bold() + " discount!";
		var cryptoString = "Payment as Crypto: <strong>$" + TotalCrypto + "</strong> ~ " + "<strong>€" + (TotalCrypto * ConversionEuro) + "</strong>"
		var paypalString = "Payment as Paypal/Wise: <strong>$" + TotalPaypal + "</strong> ~ " + "<strong>€" + Math.ceil((TotalPaypal * ConversionEuro)) + "</strong>"
		var tf2String = "Payment as TF2 Keys <strong>$" + TotalTF2 + "</strong> ~ " + "<strong>€" + Math.ceil((TotalTF2 * ConversionEuro)) + "</strong>" + "<br>Amount of TF2 keys: <strong>" + Math.ceil(TotalTF2 / TF2Value) + "</strong><br>TF2 Key rate: $" + TF2Value;
		var ssString = "You need to upload a total amount of <strong>" + Math.ceil((input / ss)) + "</strong> Screenshots"

	}

	else {
		var TotalPriceString = "To purchase " + "<strong>" + FinalLetter + "</strong>" + " points will cost"
		var cryptoString = "Payment as Crypto: <strong>$" + TotalCrypto + "</strong> ~ " + "<strong>€" + (TotalCrypto * ConversionEuro) + "</strong>"
		var paypalString = "Payment as Paypal/Wise: <strong>$" + TotalPaypal + "</strong> ~ " + "<strong>€" + Math.ceil((TotalPaypal * ConversionEuro)) + "</strong>"
		var tf2String = "Payment as TF2 Keys <strong>$" + TotalTF2 + "</strong> ~ " + "<strong>€" + Math.ceil((TotalTF2 * ConversionEuro)) + "</strong>" + "<br>Amount of TF2 keys: <strong>" + Math.ceil(TotalTF2 / TF2Value) + "</strong><br>TF2 Key rate: $" + TF2Value;
		var ssString = "You need to upload a total amount of <strong>" + Math.ceil((input / ss)) + "</strong>"
	}


	document.getElementById("price").innerHTML = TotalPriceString;
	document.getElementById("crypto").innerHTML = cryptoString;
	document.getElementById("TF2").innerHTML = tf2String;
	document.getElementById("paypal").innerHTML = paypalString;
	document.getElementById("ss").innerHTML = ssString;
}

function alertFees(){
	alert("The fees for each payment method\nCrypto = $"+CryptoConstFees+"\nTF2 = $"+TF2ConstFees+"\nPaypal = $"+PaypalConstFees+"\nNB! All prices listed includes the fees.");
}