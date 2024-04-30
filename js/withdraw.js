document.getElementById('btn-withdraw').addEventListener('click', function () {
       const newWithdrawAmount = getInputFieldById('withdraw-input');

       const previousWithdrawTotal = getValueById('withdraw-total');
       const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
       setElementValueById('withdraw-total', newWithdrawTotal);

       const previousBalanceTotal = getValueById('balance-total');
       const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
       setElementValueById('balance-total', newBalanceTotal);

})