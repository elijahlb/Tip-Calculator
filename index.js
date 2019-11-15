function calcTip() {
    var billAmount = Number(document.getElementById("billamount").value);
    var tipPercentage = Number(document.getElementById("tippercentage").value);
    var tipTotal = billAmount * (tipPercentage / 100);
    document.getElementById("tiptotal").value=tipTotal;
};

