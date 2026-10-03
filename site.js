const button = document.getElementById('copy-wechat');
button.addEventListener('click', async () => {
  const id = document.getElementById('wechat-id').textContent;
  const status = document.getElementById('copy-status');
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(id);
    status.textContent = '已复制微信号。打开微信，搜索添加，备注「综述咨询」。';
    button.textContent = '已复制';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('wechat-id'));
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = '请长按或手动复制上方微信号，在微信中搜索添加。';
  }
});
