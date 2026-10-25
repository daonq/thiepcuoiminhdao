const templateFiles = ["b-236.jpg","b-237.jpg","b-238.jpg","b-239.jpg","b-240.jpg","b-241.jpg","hd-001.jpg","hd-002.jpg","hd-003.jpg","hd-004.jpg","hd-005.jpg","hd-006.jpg","hd-007.jpg","hd-008.jpg","hd-009.jpg","hd-010.jpg","hd-011.jpg","hd-012.jpg","hd-013.jpg","hd-014.jpg","hd-015.jpg","hd-016.jpg","hd-017.jpg","hd-021.jpg","hd-029.jpg","hd-324.jpg","hd-325.jpg","hd-326.jpg","hd-327.jpg","hd-328.jpg","hd-329.jpg","hd-341.jpg","hd-342.jpg","hd-344.jpg","hd-383.jpg","hd-384.jpg","hd-385.jpg","hd-386.jpg","hd-387.jpg","hd-389.jpg","hd-390.jpg","hd-393.jpg","hd-394.jpg","hd-402.jpg","hd-403.jpg","hd-405.jpg","hd-406.jpg","hd-407.jpg","hd-408.jpg","hd-409.jpg","hd-412.jpg","hd-415.jpg","hd-416.jpg","hd-419.jpg","hd-426.jpg","hd-430.jpg","hd-433.jpg","hd-439.jpg","hd-441.jpg","hd-442.jpg","hd-444.jpg","hd-445.jpg","hd-447.jpg","hd-448.jpg","hd-450.jpg","hd-454.jpg","hd-455.jpg","hd-456.jpg","hd-457.jpg","hd-458.jpg","hd-460.jpg","hd-478.jpg","hd-479.jpg","hd-480.jpg","hd-482.jpg","hd-483.jpg","hd-484.jpg","hd-485.jpg","hd-486.jpg","hd-487.jpg","hd-488.jpg","hd-489.jpg","hd-490.jpg","hd-491.jpg","hd-492.jpg","hd-493.jpg","hd-494.jpg","hd-495.jpg","hd-496.jpg","hd-497.jpg","hd-498.jpg","hd-499.jpg","hd-500.jpg","hd-501.jpg","hd-502.jpg","hd-503.jpg","hd-504.jpg","hd-506.jpg","hd-507.jpg","hd-508.jpg","hd-510.jpg","hd-512.jpg","hd-513-tn-213.jpg","hd-514-tn-214.jpg","hd-516-tn-216.jpg","hd-517-tn-217.jpg","hd-518-tn-218.jpg","hd-519-tn-219.jpg","hd-520.jpg","hd-521.jpg","hd-522.jpg","hd-523.jpg","hd-524.jpg","hd-525-tn-525.jpg","hd-526-tn-526.jpg","hd-527-tn-527.jpg","hd-528-tn-528.jpg","hd-529-tn-529.jpg","hd-530-tn-530.jpg","hd-531-tn-531.jpg","hd-532-tn-532.jpg","hd-533-tn-533.jpg","hd-534-tn-534.jpg","hd-535-tn-535.jpg","hd-536-tn-536.jpg","hd-537-tn-537.jpg","hd-538-tn-538.jpg","hd-539-tn-539.jpg","hd-540-tn-540.jpg","hd-541-tn-541.jpg","hd-542-tn-542.jpg","hd-543-tn-543.jpg","hd-544-tn-544.jpg","hd-545-tn-545.jpg","hd-546-tn-546.jpg","hd-547-tn-547.jpg","hd-548-tn-548.jpg","hd-549-tn-549.jpg","hd-550-tn-550.jpg","hd-551-tn-551.jpg","hd-552-tn-552.jpg","hd-553-tn-553.jpg","hd-554-tn-554.jpg","hd-555-tn-555.jpg","hd-556-tn-556.jpg","hd-557-tn-557.jpg","hd-558-tn-558.jpg","hd-559-tn-559.jpg","hd-560-tn-560.jpg","hd-561-tn-561.jpg","hd-562-tn-562.jpg","hd-563-tn-563.jpg","hd-564-tn-564.jpg","hd-565-tn-565.jpg","hd-566-tn-566.jpg","hd-567-tn-567.jpg","hd-568-tn-568.jpg","hd-569-tn-569.jpg","hd-570-tn-570.jpg","hd-571-tn-571.jpg","hd-572-tn-572.jpg","hd-573-tn-573.jpg","hd-574-tn-574.jpg","hd-575-tn-575.jpg","hd-576-tn-576.jpg","hd-577-tn-577.jpg","hd-578-tn-578.jpg","hd-579-tn-579.jpg","hd-580-tn-580.jpg","hd-589-tn-589.jpg","hd-590-tn-590.jpg","hd-591-tn-591.jpg","hd-592-tn-592.jpg","hd-593-tn-593.jpg","hd-594-tn-594.jpg","hd-595-tn-595.jpg","hd-597-tn-597.jpg","hd-598-tn-598.jpg","hd-599-tn-599.jpg","hd-600-tn-600.jpg","hd-601-tn-601.jpg","hd-602-tn-602.jpg","hd-603-tn-603.jpg","hd-604-tn-604.jpg","hd-605-tn-605.jpg","hd-606-tn-606.jpg","hd-607-tn-607.jpg","hd-608-tn-608.jpg","hd-615-tn-615.jpg","hd-619-tn-619.jpg","hd-625-tn-625.jpg","hd-630.jpg","hd-701-tn-701.jpg","hd-702-tn-702.jpg","hd-703-tn-703.jpg","hd-704-tn-704.jpg","hd-705-tn-705.jpg","hd-706-tn-706.jpg","hd-707-tn-707.jpg","hd-708-tn-708.jpg","hd-800-tn-800.jpg","hd-801-tn-801.jpg","hd-802-tn-802.jpg","hd-803-tn-803.jpg","hd-804-tn-804.jpg","hd-805-tn-805.jpg","hd-806-tn-806.jpg","hd-807-tn-807.jpg","hd-808-tn-808.jpg","hd-809-tn-809.jpg","hd-810-tn-810.jpg","hd-811-tn-811.jpg","hd-812-tn-812.jpg","hd-813-tn-813.jpg","hd-814-tn-814.jpg","hd-815-tn-815.jpg","hd-816-tn-816.jpg","hd-817-tn-817.jpg","hd-818-tn-818.jpg","hd-cap-sac-01.jpg","hd-mung-tho-01.jpg","hd-mung-tho-02.jpg","tn-101.jpg","tn-102.jpg","tn-103.jpg","tn-105.jpg","tn-106.jpg","tn-107.jpg","tn-108.jpg","tn-110.jpg","tn-111.jpg","tn-112.jpg","tn-113.jpg","tn-115.jpg","tn-116.jpg","tn-117.jpg","tn-118.jpg","tn-119.jpg","tn-122.jpg","tn-123.jpg","tn-124.jpg","tn-125.jpg","tn-126.jpg","tn-127.jpg","tn-128.jpg","tn-129.jpg","tn-130.jpg","tn-131.jpg","tn-132.jpg","tn-133.jpg","tn-136.jpg","tn-138.jpg","tn-139.jpg","tn-140.jpg","tn-141.jpg","tn-142.jpg","tn-143.jpg","tn-144.jpg","tn-145.jpg","tn-146.jpg","tn-147.jpg","tn-148.jpg","tn-150.jpg","tn-153.jpg","tn-154.jpg","tn-155.jpg","tn-156.jpg","tn-157.jpg","tn-158.jpg","tn-159.jpg","tn-160.jpg","tn-181.jpg","tn-182.jpg","tn-183.jpg","tn-184.jpg"];
const labelFor = file => file.replace(/\.jpg$/i,'').replace(/^b-(\d+)$/i,'B $1').replace(/^tn-(\d+)$/i,'TN $1').replace(/^hd-(\d+)-tn-(\d+)$/i,'HD $1 · TN $2').replace(/^hd-(\d+)$/i,'HD $1').replace(/^hd-cap-sac-(\d+)$/i,'HD Cấp Sắc $1').replace(/^hd-mung-tho-(\d+)$/i,'HD Mừng Thọ $1');
const typeFor = file => file.startsWith('b-') ? 'b' : file.startsWith('tn-') ? 'tn' : file.startsWith('hd-') ? 'hd' : 'all';
const templateCard = file => {
  const label=labelFor(file), saved=JSON.parse(localStorage.getItem('md-saved')||'[]').includes(file);
  return `<article class="template-card" data-type="${typeFor(file)}" data-name="${label.toLowerCase()}">
    <div class="template-media"><img src="assets/cards/${file}" alt="Mẫu thiệp cưới ${label}" loading="lazy" decoding="async"><span class="tag">Mẫu ${label}</span><button class="heart ${saved?'saved':''}" data-save="${file}" aria-label="Lưu mẫu">${saved?'♥':'♡'}</button></div>
    <div class="template-info"><h3>Thiệp cưới ${label}</h3><div class="template-meta"><span>Có thể tùy chỉnh</span><button class="text-link" data-view="${file}" style="border:0;background:none;padding:0;cursor:pointer">Xem mẫu</button></div></div></article>`;
};
const modal=document.querySelector('#templateModal');
function openModal(file){if(!modal)return;modal.querySelector('img').src='assets/cards/'+file;modal.querySelector('img').alt='Mẫu thiệp '+labelFor(file);modal.querySelector('h2').textContent='Thiệp cưới '+labelFor(file);modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.addEventListener('click',e=>{const view=e.target.closest('[data-view]');if(view)openModal(view.dataset.view);const save=e.target.closest('[data-save]');if(save){let a=JSON.parse(localStorage.getItem('md-saved')||'[]'),f=save.dataset.save;a=a.includes(f)?a.filter(x=>x!==f):[...a,f];localStorage.setItem('md-saved',JSON.stringify(a));save.classList.toggle('saved');save.textContent=save.classList.contains('saved')?'♥':'♡'}if(e.target===modal||e.target.closest('.modal-close'))closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const featured=document.querySelector('#featuredTemplates');if(featured){const picks=['hd-548-tn-548.jpg','hd-576-tn-576.jpg','hd-800-tn-800.jpg','tn-147.jpg'].filter(x=>templateFiles.includes(x));featured.innerHTML=picks.map(templateCard).join('')}
const count=document.querySelector('#templateCount');if(count)count.textContent=templateFiles.length;
const footCount=document.querySelector('#footerCount');if(footCount)footCount.textContent=templateFiles.length+' mẫu thiệp hiện có';
const grid=document.querySelector('#templateGrid'),search=document.querySelector('#templateSearch'),countEl=document.querySelector('#galleryCount'),load=document.querySelector('#loadMore');
let activeType='all',visible=24;
function matching(){const q=(search?.value||'').trim().toLowerCase();return templateFiles.filter(f=>(activeType==='all'||typeFor(f)===activeType)&&labelFor(f).toLowerCase().includes(q))}
function render(){if(!grid)return;const found=matching();grid.innerHTML=found.slice(0,visible).map(templateCard).join('')||'<div class="empty">Không tìm thấy mã mẫu phù hợp.</div>';if(countEl)countEl.textContent=`Đang hiển thị ${Math.min(found.length,visible)} / ${found.length} mẫu`;if(load)load.style.display=found.length>visible?'inline-flex':'none'}
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeType=b.dataset.filter;visible=24;render()}));search?.addEventListener('input',()=>{visible=24;render()});load?.addEventListener('click',()=>{visible+=24;render()});render();
const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open)});
const form=document.querySelector('#quoteForm');form?.addEventListener('submit',async e=>{e.preventDefault();const status=form.querySelector('.form-status'),btn=form.querySelector('button[type=submit]');if(form.elements._honey?.value)return;btn.disabled=true;status.textContent='Đang gửi yêu cầu…';try{const response=await fetch('https://formsubmit.co/ajax/daonq.works@gmail.com',{method:'POST',headers:{Accept:'application/json'},body:new FormData(form)});if(!response.ok)throw new Error();form.reset();status.textContent='Minh Đạo đã nhận được yêu cầu. Cảm ơn bạn!'}catch{status.textContent='Chưa thể gửi tự động. Bạn vui lòng gọi 0904 611 892 hoặc gửi email trực tiếp.'}finally{btn.disabled=false}});

// Count one website visit per browser every 30 minutes, then show live period totals on the homepage.
const visitCountEls=document.querySelectorAll('[data-visit-count]');
{
  const VISIT_API='https://abacus.jasoncameron.dev';
  const VISIT_NAMESPACE='thiepcuoiminhdao-vn-2026';
  const VISIT_THROTTLE=30*60*1000;
  const numberFormat=new Intl.NumberFormat('vi-VN');
  const nowParts=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Ho_Chi_Minh',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).filter(part=>part.type!=='literal').map(part=>[part.type,part.value]));
  const localDate=new Date(Date.UTC(Number(nowParts.year),Number(nowParts.month)-1,Number(nowParts.day)));
  const dayNumber=localDate.getUTCDay()||7;
  localDate.setUTCDate(localDate.getUTCDate()+4-dayNumber);
  const weekYear=localDate.getUTCFullYear();
  const yearStart=new Date(Date.UTC(weekYear,0,1));
  const weekNumber=Math.ceil((((localDate-yearStart)/86400000)+1)/7);
  const keys={
    total:'total',
    day:`day-${nowParts.year}-${nowParts.month}-${nowParts.day}`,
    week:`week-${weekYear}-${String(weekNumber).padStart(2,'0')}`,
    month:`month-${nowParts.year}-${nowParts.month}`,
    year:`year-${nowParts.year}`
  };
  const lastVisit=Number(localStorage.getItem('md-visit-last-counted')||0);
  const shouldCount=Date.now()-lastVisit>VISIT_THROTTLE;
  const action=shouldCount?'hit':'get';
  const statusEl=document.querySelector('#visitStatus');
  Promise.all(Object.entries(keys).map(async([period,key])=>{
    const response=await fetch(`${VISIT_API}/${action}/${VISIT_NAMESPACE}/${key}`,{cache:'no-store'});
    if(!response.ok)throw new Error(`Visitor counter returned ${response.status}`);
    const data=await response.json();
    const value=Number(data.value);
    if(!Number.isFinite(value))throw new Error('Invalid visitor count');
    const output=document.querySelector(`[data-visit-count="${period}"]`);
    if(output)output.textContent=numberFormat.format(value);
  })).then(()=>{
    if(shouldCount)localStorage.setItem('md-visit-last-counted',String(Date.now()));
    if(statusEl)statusEl.textContent='Số liệu được cập nhật tự động theo giờ Việt Nam.';
  }).catch(()=>{
    visitCountEls.forEach(el=>{if(el.textContent==='—')el.textContent='--'});
    if(statusEl){statusEl.textContent='Chưa thể tải số lượt truy cập. Vui lòng thử lại sau.';statusEl.classList.add('error')}
  });
}

