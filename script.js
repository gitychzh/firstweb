// 设置当前导航链接为激活状态
document.addEventListener('DOMContentLoaded', function() {
  // 获取当前页面路径
  const currentLocation = location.pathname.split('/').pop();
  
  // 获取所有导航链接
  const navLinks = document.querySelectorAll('.navbar a');
  
  // 遍历导航链接，匹配当前页面
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentLocation) {
      link.classList.add('active');
    }
  });
  
  // 联系表单验证
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 简单验证
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !message) {
        alert('请填写所有必填字段！');
        return;
      }
      
      // 邮箱格式验证
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('请输入有效的邮箱地址！');
        return;
      }
      
      // 表单提交成功
      alert('表单提交成功！感谢您的留言。');
      contactForm.reset();
    });
  }
});