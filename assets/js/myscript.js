function convertHTMLToImage(htmlContentHolder, fileName) {
  html2canvas(document.getElementById(htmlContentHolder), {
    allowTaint: true,
    useCORS: true,
  }).then(function (canvas) {
    const anchorTag = document.createElement('a');
    document.body.appendChild(anchorTag);
    anchorTag.download = fileName;
    anchorTag.href = canvas.toDataURL();
    anchorTag.target = '_blank';
    anchorTag.click();
  });
}

$('#link-login').change(function () {
  const link = $(this).val();
  $('#link-login-view-content').text(link);
});

$('#time').change(function () {
  const time = $(this).val();
  $('#time-view-content').text(time);
});

$('#money').change(function () {
  const money = $(this).val();
  $('#money-view-content').text(money);
});

$('#username').change(function () {
  const username = $(this).val();
  $('#username-view-content').text(username);
});

$('#banking-time').change(function () {
  const bankTime = $(this).val();
  $('#banking-time-view-content').text(bankTime);
});

$('#beneficiary-person').change(function () {
  const name = $(this).val();
  $('#beneficiary-person-view-content').text(name.toUpperCase());
});

$('#beneficiary-account').change(function () {
  const beneficiaryAccount = $(this).val();
  $('#beneficiary-account-view-content').text(beneficiaryAccount);
});

$('#beneficiary-bank').change(function () {
  const beneficiaryBank = $(this).val();
  $('#beneficiary-bank-view-content').text(beneficiaryBank);
});
$('#beneficiary-bank-name').change(function () {
  const beneficiaryBank = $(this).val();
  $('#beneficiary-bank-name-view-content').text(beneficiaryBank);
});

$('#transaction-code').change(function () {
  const transactionCode = $(this).val();
  $('#transaction-code-view-content').text(transactionCode);
});
$('#sender-bank').change(function () {
  const transactionCode = $(this).val();
  $('#sender-bank-view-content').text(transactionCode);
});
$('#sender-name').change(function () {
  const transactionCode = $(this).val();
  $('#sender-name-view-content').text(transactionCode);
});

$('#transaction-content').change(function () {
  const transactionContent = $(this).val();
  $('#transaction-content-view-content').text(transactionContent);
});

$('#transaction-time').change(function () {
  const transactionTime = $(this).val();
  $('#transaction-time-view-content').text(transactionTime);
});
$('#text-money').change(function () {
  const transactionTime = $(this).val();
  $('#text-money-view-content').text(transactionTime);
});
$('#transaction-date').change(function () {
  const transactionTime = $(this).val();
  $('#transaction-date-view-content').text(transactionTime);
});
$('#effective-date').change(function () {
  const transactionTime = $(this).val();
  $('#effective-date-view-content').text(transactionTime);
});
$('#sender-account').change(function () {
  const transactionTime = $(this).val();
  $('#sender-account-view-content').text(transactionTime);
});

$('#beneficiary-name').change(function () {
  const value = $(this).val();
  $('#beneficiary-name-view-content').text(value.toUpperCase());
});

$('#card-number').change(function () {
  const value = $(this).val();
  $('#card-number-view-content').text(value);
});
$('#bank').change(function () {
  const value = $(this).val();
  $('#bank-view-content').text(value);
});
$('#code').change(function () {
  const value = $(this).val();
  $('#code-view-content').text(value);
});
$('#score').change(function () {
  const value = $(this).val();
  $('#score-view-content').text(value);
});

$('#date').change(function () {
  const value = $(this).val();
  $('#date-view-content').text(value);
});
$('#total').change(function () {
  const value = $(this).val();
  $('#total-view-content').text(value);
});
$('#date-1').change(function () {
  const value = $(this).val();
  $('#date-1-view-content').text(value);
});
$('#money-request-1').change(function () {
  const value = $(this).val();
  $('#money-request-1-view-content').text(value);
});
$('#money-real-1').change(function () {
  const value = $(this).val();
  $('#money-real-1-view-content').text(value);
});
$('#bank-1').change(function () {
  const value = $(this).val();
  $('#bank-1-view-content').text(value);
});
$('#type-1').change(function () {
  const value = $(this).val();
  $('#type-1-view-content').text(value);
});
$('#account-bank-1').change(function () {
  const value = $(this).val();
  $('#account-bank-1-view-content').text(value);
});
$('#note-1').change(function () {
  const value = $(this).val();
  $('#note-1-view-content').text(value);
});
$('#txn-1').change(function () {
  const value = $(this).val();
  $('#txn-1-view-content').text(value);
});

$('#date-2').change(function () {
  const value = $(this).val();
  $('#date-2-view-content').text(value);
});
$('#money-request-2').change(function () {
  const value = $(this).val();
  $('#money-request-2-view-content').text(value);
});
$('#money-real-2').change(function () {
  const value = $(this).val();
  $('#money-real-2-view-content').text(value);
});
$('#bank-2').change(function () {
  const value = $(this).val();
  $('#bank-2-view-content').text(value);
});
$('#type-2').change(function () {
  const value = $(this).val();
  $('#type-2-view-content').text(value);
});
$('#account-bank-2').change(function () {
  const value = $(this).val();
  $('#account-bank-2-view-content').text(value);
});
$('#note-2').change(function () {
  const value = $(this).val();
  $('#note-2-view-content').text(value);
});
$('#txn-2').change(function () {
  const value = $(this).val();
  $('#txn-2-view-content').text(value);
});

$('#date-3').change(function () {
  const value = $(this).val();
  $('#date-3-view-content').text(value);
});
$('#type-3').change(function () {
  const value = $(this).val();
  $('#type-3-view-content').text(value);
});
$('#money-request-3').change(function () {
  const value = $(this).val();
  $('#money-request-3-view-content').text(value);
});
$('#money-real-3').change(function () {
  const value = $(this).val();
  $('#money-real-3-view-content').text(value);
});
$('#bank-3').change(function () {
  const value = $(this).val();
  $('#bank-3-view-content').text(value);
});
$('#type-3').change(function () {
  const value = $(this).val();
  $('#type-3-view-content').text(value);
});
$('#account-bank-3').change(function () {
  const value = $(this).val();
  $('#account-bank-3-view-content').text(value);
});
$('#note-3').change(function () {
  const value = $(this).val();
  $('#note-3-view-content').text(value);
});
$('#txn-3').change(function () {
  const value = $(this).val();
  $('#txn-3-view-content').text(value);
});

$('#date-4').change(function () {
  const value = $(this).val();
  $('#date-4-view-content').text(value);
});
$('#type-4').change(function () {
  const value = $(this).val();
  $('#type-4-view-content').text(value);
});
$('#money-real-4').change(function () {
  const value = $(this).val();
  $('#money-real-4-view-content').text(value);
});
$('#bank-4').change(function () {
  const value = $(this).val();
  $('#bank-4-view-content').text(value);
});

$('#fee').change(function () {
  const value = $(this).val();
  $('#fee-view-content').text(value);
});

$('.pin').click(function () {
  let src = $(this).find('img').attr('src');
  let pinPercent = $(this).find('img').attr('pin-percent');
  $('#pin img').attr('src', src);
  $('#pin-percent-view-content').text(pinPercent);
});

$('.wifi').click(function () {
  let src = $(this).find('img').attr('src');
  $('#signal-wifi img').attr('src', src);
  $('#wifi img').attr('src', src);
});

$('.signal-1').click(function () {
  let src = $(this).find('img').attr('src');
  $('#signal-1 img').attr('src', src);
});

$('.signal-2').click(function () {
  let src = $(this).find('img').attr('src');
  $('#signal-2 img').attr('src', src);
});

$('.signal').click(function () {
  let src = $(this).find('img').attr('src');
  $('#signal img').attr('src', src);
});

$('.signal-3g img').click(function () {
  let src = $(this).attr('src');
  $('#signal-1 img').attr('src', src);
});

$('.signal-4g img').click(function () {
  let src = $(this).attr('src');
  $('#signal-1 img').attr('src', src);
});

$('.menu li').click(function (e) { 
  $(this).find('ul').toggleClass('active');
});