/* 
document.getElementById('btn-deposit').addEventListener('click', function () {
       // getInputFieldById('deposit-input');

       const deposit = document.getElementById('deposit-input');
       const depositInputString = deposit.value;
       const depositInput = parseFloat(depositInputString);

       if (!isNaN(depositInputString)) {
              const depositNow = document.getElementById('deposit-total');
              const depositValueString = depositNow.innerText;
              const depositValue = parseFloat(depositValueString);

              const depositTotal = depositInput + depositValue;
              depositNow.innerText = depositTotal;

              deposit.value = '';

              const balanceNow = document.getElementById('balance-total');
              const balanceValueString = balanceNow.innerText;
              const balanceValue = parseFloat(balanceValueString);


              const balanceUpdate = balanceValue + depositInput;
              balanceNow.innerText = balanceUpdate;
       } else {
              alert('Please give us a number');
              withdraw.value = '';

       }

})  */

document.getElementById('btn-deposit').addEventListener('click', function () {
       const newDepositAmount = getInputFieldById('deposit-input');

       const previousDepositTotal = getValueById('deposit-total');
       const newDepositTotal = previousDepositTotal + newDepositAmount;
       setElementValueById('deposit-total', newDepositTotal);

       const previousBalanceTotal = getValueById('balance-total');
       const newBalanceTotal = previousBalanceTotal + newDepositAmount;
       setElementValueById('balance-total', newBalanceTotal);

})