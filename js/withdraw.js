/* document.getElementById('btn-withdraw').addEventListener('click', function () {
       const withdraw = document.getElementById('withdraw-input');
       const withdrawInputString = withdraw.value;
       const withdrawInput = parseFloat(withdrawInputString);

       if (!isNaN(withdrawInputString)) {
              const withdrawNow = document.getElementById('withdraw-total');
              const withdrawValueString = withdrawNow.innerText;
              const withdrawValue = parseFloat(withdrawValueString);

              withdraw.value = '';

              const balanceNow = document.getElementById('balance-total');
              const balanceValueString = balanceNow.innerText;
              const balanceValue = parseFloat(balanceValueString);

              const balanceUpdate = balanceValue - withdrawInput;

              if (withdrawInput > balanceValue) {
                     alert('TAKA NAIIIIII!!!')
                     return;
              }

              const withdrawTotal = withdrawInput + withdrawValue;
              withdrawNow.innerText = withdrawTotal;

              balanceNow.innerText = balanceUpdate;

       } else {
              alert('Please give us a number');
              withdraw.value = '';

       }

}) */

document.getElementById('btn-withdraw').addEventListener('click', function () {
       const newWithdrawAmount = getInputFieldById('withdraw-input');

       const previousWithdrawTotal = getValueById('withdraw-total');
       const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
       setElementValueById('withdraw-total', newWithdrawTotal);

       const previousBalanceTotal = getValueById('balance-total');
       const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
       setElementValueById('balance-total', newBalanceTotal);


})