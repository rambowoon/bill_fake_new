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

$('#time').change(function () {
  const time = $(this).val();
  $('#time-view-content').text(time);
});

$('#money').change(function () {
  const money = $(this).val();
  $('#money-view-content').text(money);
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
  console.log(value);
  $('#card-number-view-content').text(value);
});

$('#fee').change(function () {
  const value = $(this).val();
  console.log(value);
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
  $('#signal-2 img').attr('src', src);
});
