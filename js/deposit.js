document.getElementById('btn-deposit').addEventListener('click', function () {
       const newDepositAmount = getInputFieldById('deposit-input');

       const previousDepositTotal = getValueById('deposit-total');
       const newDepositTotal = previousDepositTotal + newDepositAmount;
       setElementValueById('deposit-total', newDepositTotal);

       const previousBalanceTotal = getValueById('balance-total');
       const newBalanceTotal = previousBalanceTotal + newDepositAmount;
       setElementValueById('balance-total', newBalanceTotal);

})