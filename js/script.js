function ubahJenisPerhitungan() {
    var jenisPerhitungan = document.getElementById("jenisPerhitungan").value;
    var inputLuas = document.getElementById("inputLuas");
    var inputKeliling = document.getElementById("inputKeliling");
    var rumusLuas = document.getElementById("rumusLuas");
    var rumusKeliling = document.getElementById("rumusKeliling");
    var hasilElement = document.getElementById("hasil");
  
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
  
    if (jenisPerhitungan === "luas") {
      inputLuas.style.display = "block";
      inputKeliling.style.display = "none";
      rumusLuas.style.display = "block";
      rumusKeliling.style.display = "none";
      document.getElementById("rumusLuasText").innerText =
        "Luas = 1/2 x alas x tinggi";
    } else {
      inputLuas.style.display = "none";
      inputKeliling.style.display = "block";
      rumusLuas.style.display = "none";
      rumusKeliling.style.display = "block";
      document.getElementById("rumusKelilingText").innerText =
        "Keliling = a + b + c";
    }
  }
  
  function hitung() {
    var jenisPerhitungan = document.getElementById("jenisPerhitungan").value;
    var inputLuas = document.getElementById("inputLuas");
    var inputKeliling = document.getElementById("inputKeliling");
  
    var alas, tinggi, sisiA, sisiB, sisiC, hasil, formulaText;
  
    if (jenisPerhitungan === "luas") {
      alas = parseFloat(document.getElementById("alas").value);
      tinggi = parseFloat(document.getElementById("tinggi").value);
  
      if (isNaN(alas) || isNaN(tinggi)) {
        alert("Nilai untuk alas ataupun tinggi tidak boleh kosong!");
        return;
      }
  
      hasil = (1 / 2) * alas * tinggi;
      inputLuas.style.display = "block";
      inputKeliling.style.display = "none";
      formulaText = `1/2 x ${alas} x ${tinggi}`;
      var calculationText = `Luas : 1/2 x alas x tinggi`;
      var calculationResult =
        "Luas : " + formulaText + "<br>" + "Luas : " + hasil;
    } else {
      sisiA = parseFloat(document.getElementById("sisiA").value);
      sisiB = parseFloat(document.getElementById("sisiB").value);
      sisiC = parseFloat(document.getElementById("sisiC").value);
  
      if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert("Nilai untuk sisi a, b, ataupun c tidak boleh kosong!");
        return;
      }
  
      hasil = sisiA + sisiB + sisiC;
      inputLuas.style.display = "none";
      inputKeliling.style.display = "block";
      formulaText = `${sisiA} + ${sisiB} + ${sisiC}`;
      var calculationText = `Keliling : a + b + c`;
      var calculationResult =
        "Keliling : " + formulaText + "<br>" + "Keliling : " + hasil;
    }
  
    calculationHistory.push({
      type: jenisPerhitungan,
      text: calculationText,
      result: calculationResult,
    });
  
    updateHistoryDisplay();
  
    displayResult(calculationText, calculationResult);
  }
  
  function displayResult(calculationText, calculationResult) {
    var hasilElement = document.getElementById("hasil");
    hasilElement.innerHTML = calculationText + "<br>" + calculationResult;
  }
  
  function updateHistoryDisplay() {
    var historyElement = document.getElementById("history");
  
    var newHistoryHTML = "";
  
    for (var i = calculationHistory.length - 1; i >= 0; i--) {
      var historyItem = calculationHistory[i];
      newHistoryHTML +=
        "<p>" + historyItem.text + "<br>" + historyItem.result + "</p>";
    }
  
    historyElement.innerHTML = newHistoryHTML;
  }
  
  ubahJenisPerhitungan();
  
  var calculationHistory = [];
  
  function reset() {
    var confirmation = window.confirm("Apakah Anda ingin mereset hasil dan semua riwayat?");
  
    if (confirmation) {
      document.getElementById("alas").value = "";
      document.getElementById("tinggi").value = "";
      document.getElementById("sisiA").value = "";
      document.getElementById("sisiB").value = "";
      document.getElementById("sisiC").value = "";
  
      document.getElementById("hasil").innerHTML = "";
      document.getElementById("history").innerHTML = "";
      calculationHistory = [];
    } 
  }