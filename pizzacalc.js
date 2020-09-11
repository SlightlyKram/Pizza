
//Salima Fong
//Pizza Calculator

alert("U heeft keuze uit verschillende pizzas");
	var small = prompt("Hoeveel Small pizzas wilt u?")
	var medium = prompt("Hoeveel Medium pizzas wilt u?")
	var large = prompt("Hoeveel Large pizzas wilt u?")

		const SMALLPRIZE = 5
		const MEDIUMPRIZE = 7
		const LARGEPRIZE = 10



			document.write(small + "x" + " " + "Pizza Small" + " " + "=" + " " + small * SMALLPRIZE + " " + "euro" + " " + "<br>" + medium + "x" + " " + "Pizza Medium" + " " + "=" + " " + medium * MEDIUMPRIZE + " " + "euro" + "<br>" + large + "x" + " " + "Pizza Large" + " " + "=" + " " + large * LARGEPRIZE + " " +"euro" + "<br>" + "<br>");

			
			document.write("Totale bedrag:" + " " + (Number(SMALLPRIZE) * small + Number(MEDIUMPRIZE) * medium + Number(LARGEPRIZE) * large) + " " + "euro")