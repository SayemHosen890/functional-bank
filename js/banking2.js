document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    // console.log(depositInputText);
    const depositInputAmount = parseFloat(depositInputText);


    //get the amount
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositInputAmount + depositTotalAmount;

    //update the balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositInputAmount;

    //clear the inputbox
    depositInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    // console.log(withdrawInputAmount);

    //get the amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawInputAmount + withdrawTotalAmount;

    //update the balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount;

    //clear the input button
    withdrawInput.value = '';

});