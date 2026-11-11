(() => {
  'use strict';

  const synopsis = 'Di sebuah kampung kecil, agama dijadikan tameng untuk merampas hak orang miskin. Beras bantuan warga dibawa kabur, dan mereka yang berbeda keyakinan diusir. Pak Setot, petani jujur, nyaris putus asa. Di sinilah Rudy, pengacara muda beringas, turun tangan. Keadilan bukan soal seiman atau tidak, tapi hak semua manusia. Saksikan duel argumen di ruang sidang.';
  const sessions = [
    {
      phase:'MULTIKULTURALISME', chapter:'TOLERANSI · TASAMUH', location:'RUANG SIDANG', speaker:'MBAK KALISTA', role:'PENGACARA LAWAN', actor:'kalista',
      lines:[['PAK HARTO','HAKIM','harto','Sidang perkara hak warga Kampung Sumberrejo dibuka. Kita menilai tindakan dan bukti, bukan keyakinan seseorang. Silakan, pihak pembela.'],['MBAK KALISTA','PENGACARA LAWAN','kalista','Bantuan dari warga non-Muslim itu haram! Klien saya hanya berusaha menjaga kemurnian kampung.'],['RUDY','PEMBELA','rudy','Keberatan. Menolong tetangga yang lapar bukan soal label agama.'] ],
      target:'Bantuan ini murni sosial. Menolak bantuan untuk orang miskin karena beda keyakinan bertentangan dengan QS Al-Maidah ayat 8 yang memerintahkan berbuat adil kepada siapa pun.',
      innerSpeaker:'PAK RAYA', inner:'(Kampret, bocah ini pintar.)'
    },
    {
      phase:'MULTIKULTURALISME', chapter:'PERSAUDARAAN · UKHUWWAH', location:'RUANG SIDANG', speaker:'MBAK KALISTA', role:'PENGACARA LAWAN', actor:'kalista',
      lines:[['MBAK KALISTA','PENGACARA LAWAN','kalista','Klien saya hanya menyebarkan informasi. Tidak ada niat menghasut atau memecah warga.'],['RUDY','PEMBELA','rudy','Informasi yang belum terbukti telah membuat warga saling curiga. Dampaknya nyata.'],['PAK HARTO','HAKIM','harto','Jelaskan mengapa ucapan itu bukan sekadar kabar biasa.'] ],
      target:'Itu hasutan! Memecah belah persaudaraan dilarang keras dalam Islam, sebagaimana sabda Nabi: Barangsiapa memecah belah, bukan golonganku.',
      innerSpeaker:'MBAK KALISTA', inner:'(Dia berani kutip hadis?!)'
    },
    {
      phase:'MULTIKULTURALISME', chapter:'KEADILAN · ADIL', location:'RUANG SIDANG', speaker:'PAK RAYA', role:'TERGUGAT', actor:'raya',
      lines:[['PAK RAYA','TERGUGAT','raya','Jangan putarbalikkan ucapanku, Rudy. Aku hanya membela warga yang seiman denganku.'],['PAK HARTO','HAKIM','harto','Pengadilan ini menilai hak setiap warga. Apa bantahanmu?'],['RUDY','PEMBELA','rudy','Iman tidak boleh dijadikan alasan untuk merampas hak orang lain.'] ],
      target:'Jangan campuradukkan hak dan batil. Fitnah untuk merampas hak orang lain adalah kezaliman!',
      innerSpeaker:'PAK RAYA', inner:'(Awas kau, Rudy!)'
    },
    {
      phase:'KASUS BERAS', chapter:'BERAS BANTUAN · CIDUK', location:'RUANG SIDANG', speaker:'MBAK KALISTA', role:'PENGACARA LAWAN', actor:'kalista',
      lines:[['MBAK KALISTA','PENGACARA LAWAN','kalista','Klien saya tidak mencuri beras! Tuduhan itu muncul tanpa bukti yang sah.'],['RUDY','PEMBELA','rudy','Empat bulan lalu, jatah bantuan warga lenyap dari gudang kampung.'],['PAK HARTO','HAKIM','harto','Hubungkan tuduhan itu dengan peristiwa yang dapat diuji.'] ],
      target:'Pak Raya mengkorupsi beras bantuan warga non-Muslim 4 bulan lalu. Ini kezaliman (QS Al-Baqarah: 195).',
      innerSpeaker:'MBAK KALISTA', inner:'(Dari mana dia tahu soal beras?!)'
    },
    {
      phase:'KASUS BERAS', chapter:'BUKTI · JEJAK PENJUALAN', location:'RUANG SIDANG', speaker:'PAK RAYA', role:'TERGUGAT', actor:'raya',
      lines:[['PAK RAYA','TERGUGAT','raya','Itu beras busuk, saya buang! Tak ada yang bisa membuktikan sebaliknya.'],['RUDY','PEMBELA','rudy','Catatan timbang dan kuitansi pasar menunjukkan beras itu dijual, bukan dibuang.'],['PAK HARTO','HAKIM','harto','Ajukan bantahanmu. Jangan hanya mengandalkan prasangka.'] ],
      target:'Bohong! Anda menjualnya ke pasar gelap. Memakan harta secara batil dilarang (QS An-Nisa: 29).',
      innerSpeaker:'PAK RAYA', inner:'(Brengsek, rahasia pasar gelapku bocor!)'
    },
    {
      phase:'KASUS BERAS', chapter:'KESAKSIAN · MUSAWAH', location:'RUANG SIDANG', speaker:'MBAK KALISTA', role:'PENGACARA LAWAN', actor:'kalista',
      lines:[['MBAK KALISTA','PENGACARA LAWAN','kalista','Saksi itu cuma warga miskin. Kesaksiannya tak bisa dipercaya begitu saja.'],['PAK SETOT','SAKSI','setot','Saya mencatat karung yang datang dan yang hilang. Catatan ini saya bawa sendiri.'],['PAK HARTO','HAKIM','harto','Kedudukan ekonomi bukan ukuran kebenaran. Rudy, lanjutkan.'] ],
      target:'Justru karena mereka lemah kita harus membela. Kemuliaan di hadapan Allah hanyalah takwa (QS Al-Hujurat: 13), bukan kekayaan.',
      innerSpeaker:'MBAK KALISTA', inner:'(Hakim mulai berpihak padanya!)'
    },
    {
      phase:'KASUS BERAS', chapter:'AMANAH · KEPEMIMPINAN', location:'RUANG SIDANG', speaker:'PAK RAYA', role:'TERGUGAT', actor:'raya',
      lines:[['PAK RAYA','TERGUGAT','raya','Aku pengurus kampung, tak bisa dihancurkan! Semua warga harus patuh padaku.'],['RUDY','PEMBELA','rudy','Jabatan adalah amanah, bukan tameng untuk menindas. Pak Setot berani bersaksi demi tetangganya.'],['PAK HARTO','HAKIM','harto','Buktikan bahwa pembelaan terhadap warga itu berpijak pada nilai keadilan.'] ],
      target:'Membela warga non-Muslim yang dizalimi adalah wujud Ukhuwwah Insaniyah. Jabatan adalah amanah, bukan hak untuk menindas.',
      innerSpeaker:'PAK RAYA', inner:'(Mereka tak lagi takut padaku. Bagaimana ini?)'
    },
    {
      phase:'KASUS BERAS', chapter:'BUKTI · CATATAN GUDANG', location:'LORONG SIDANG', speaker:'PAK SETOT', role:'SAKSI', actor:'setot',
      lines:[['PAK HARTO','HAKIM','harto','Sidang diskors sejenak. Kita tetap di lingkungan pengadilan. Saksi, jelaskan catatan yang Anda serahkan.'],['PAK SETOT','SAKSI','setot','Di lorong ini saya tunjukkan salinan daftar keluar gudang. Tanggal dan jumlahnya cocok dengan kuitansi penjualan.'],['RUDY','PEMBELA','rudy','Catatan warga biasa tetap bukti yang patut diperiksa, Yang Mulia.'] ],
      target:'Daftar gudang mencatat 40 karung keluar pada malam yang sama dengan kuitansi penjualan. Jumlah dan tanggalnya cocok.',
      innerSpeaker:'PAK RAYA', inner:'(Catatan itu seharusnya sudah kumusnahkan!)'
    },
    {
      phase:'KASUS BERAS', chapter:'BUKTI · TANDA TERIMA', location:'LORONG SIDANG', speaker:'MBAK KALISTA', role:'PENGACARA LAWAN', actor:'kalista',
      lines:[['MBAK KALISTA','PENGACARA LAWAN','kalista','Tanda terima itu tak mencantumkan nama klien saya. Jangan simpulkan terlalu jauh.'],['RUDY','PEMBELA','rudy','Ada cap pengurus kampung dan paraf yang sama pada surat gudang serta kuitansi.'],['PAK HARTO','HAKIM','harto','Yang diuji adalah kecocokan bukti, bukan siapa yang paling keras bicara.'] ],
      target:'Cap pengurus dan paraf Pak Raya ada pada kedua dokumen. Bukti yang saling cocok menguatkan kesaksian Pak Setot.',
      innerSpeaker:'MBAK KALISTA', inner:'(Dua dokumen itu cocok. Sulit dibantah.)'
    },
    {
      phase:'KASUS BERAS', chapter:'PENGAKUAN · TANGGUNG JAWAB', location:'RUANG SIDANG', speaker:'PAK RAYA', role:'TERGUGAT', actor:'raya',
      lines:[['PAK RAYA','TERGUGAT','raya','Aku cuma meminjam uang hasil penjualan itu. Nanti juga akan kuganti!'],['RUDY','PEMBELA','rudy','Beras itu hak warga, bukan milik pribadi. Mengambilnya tanpa izin tetap merugikan mereka.'],['PAK HARTO','HAKIM','harto','Jawab atas bukti yang ada, bukan janji yang tak pernah diminta warga.'] ],
      target:'Mengambil amanah tanpa izin tetap merugikan warga. Pengembalian tidak menghapus tanggung jawab atas perbuatan itu.',
      innerSpeaker:'PAK RAYA', inner:'(Tak ada alasan yang tersisa. Mereka melihat semuanya.)'
    },
    {
      phase:'KASUS PENGUSIRAN', chapter:'HAK WARGA · TASAMUH', location:'LORONG SIDANG', speaker:'MBAK KALISTA', role:'PENGACARA LAWAN', actor:'kalista',
      lines:[['MBAK KALISTA','PENGACARA LAWAN','kalista','Warga yang berbeda keyakinan itu membuat kampung tidak nyaman. Mereka sebaiknya pergi saja.'],['RUDY','PEMBELA','rudy','Mereka warga yang sah. Perbedaan tidak menghapus hak untuk tinggal dengan aman.'],['PAK HARTO','HAKIM','harto','Tidak seorang pun boleh diusir tanpa dasar hukum.'] ],
      target:'Mengusir warga karena keyakinannya melanggar hak dan martabat mereka. Tasamuh berarti menghormati perbedaan tanpa merampas hak.',
      innerSpeaker:'MBAK KALISTA', inner:'(Dalih ketertiban ini tak akan meyakinkan hakim.)'
    },
    {
      phase:'KASUS PENGUSIRAN', chapter:'KESAKSIAN · UKHUWWAH', location:'RUANG SIDANG', speaker:'PAK SETOT', role:'SAKSI', actor:'setot',
      lines:[['PAK SETOT','SAKSI','setot','Saya tinggal bertetangga dengan mereka. Mereka ikut bekerja bakti dan membantu saat panen.'],['PAK RAYA','TERGUGAT','raya','Kebaikan mereka tidak mengubah kenyataan bahwa mereka berbeda!'],['RUDY','PEMBELA','rudy','Perbedaan bukan ancaman. Persaudaraan kemanusiaan tampak dalam saling menolong.'] ],
      target:'Kesaksian Pak Setot membuktikan mereka hidup rukun dan saling menolong. Ukhuwwah insaniyah merangkul sesama manusia.',
      innerSpeaker:'PAK RAYA', inner:'(Setot justru membela tetangga yang ingin kuusir.)'
    },
    {
      phase:'PEMBELAAN AKHIR', chapter:'MUSAWAH · SETARA DI HADAPAN HUKUM', location:'RUANG SIDANG', speaker:'MBAK KALISTA', role:'PENGACARA LAWAN', actor:'kalista',
      lines:[['MBAK KALISTA','PENGACARA LAWAN','kalista','Pengadilan seharusnya membela mayoritas. Tidak mungkin semua orang disamakan.'],['RUDY','PEMBELA','rudy','Musawah bukan menyamakan semua keadaan, melainkan memberi setiap orang hak dan perlakuan adil.'],['PAK HARTO','HAKIM','harto','Hukum melindungi manusia tanpa membedakan kekayaan maupun keyakinan.'] ],
      target:'Musawah menuntut kesetaraan martabat dan perlindungan hukum. Keadilan berlaku bagi semua, bukan hanya kelompok mayoritas.',
      innerSpeaker:'MBAK KALISTA', inner:'(Argumen kesetaraan itu tak bisa kutepis.)'
    },
    {
      phase:'PUTUSAN', chapter:'KEADILAN · AMANAH', location:'RUANG SIDANG', speaker:'PAK HARTO', role:'HAKIM', actor:'harto',
      lines:[['RUDY','PEMBELA','rudy','Catatan gudang, kuitansi, dan kesaksian saling menguatkan. Beras adalah hak warga, dan pengusiran karena keyakinan harus dihentikan.'],['PAK RAYA','TERGUGAT','raya','Aku… tak punya jawaban lagi.'],['PAK HARTO','HAKIM','harto','Pengadilan menyatakan Pak Raya bertanggung jawab atas penyalahgunaan bantuan. Hak warga untuk tinggal aman dan setara wajib dipulihkan.'] ],
      target:'Keadilan harus memulihkan hak warga dan menghentikan diskriminasi. Amanah publik menuntut kejujuran, tanggung jawab, dan perlindungan semua.',
      innerSpeaker:'PAK RAYA', inner:'(Kebenaran menang. Aku harus mempertanggungjawabkan semuanya.)'
    }
  ];

  const $ = id => document.getElementById(id);
  const ui = {
    prologue:$('prologue'), play:$('playScreen'), synopsis:$('synopsis'), start:$('startBtn'),
    dialoguePanel:$('dialoguePanel'), dialogue:$('dialogueText'), dialogueChapter:$('dialogueChapter'), dialogueCount:$('dialogueCount'),
    typing:$('typingPanel'), target:$('targetText'), input:$('argumentInput'), status:$('typingStatus'), feedback:$('typingFeedback'), submit:$('submitBtn'),
    sessionNumber:$('sessionNumber'), phase:$('phaseLabel'), typingSession:$('typingSession'), hp:$('hpValue'), hpBar:$('hpBar'), hpCaption:$('hpCaption'), location:$('locationLabel'), footerLocation:$('footerLocation'),
    speaker:$('speakerName'), role:$('speakerRole'), actor:$('actor'), objection:$('objectionOverlay'), countdown:$('objectionCountdown'), inner:$('innerModal'), innerSpeaker:$('innerSpeaker'), innerText:$('innerText'), continue:$('continueBtn'), final:$('finalModal'), finalCopy:$('finalCopy'), stamp:$('rulingStamp'), toast:$('toast'), sound:$('soundBtn')
  };
  let index = 0, lineIndex = 0, hp = 100, typingTimer = null, soundOn = true, audioContext = null, typeGeneration = 0, toastTimer = null;

  function beep(){
    if(!soundOn)return;
    try{
      audioContext ||= new (window.AudioContext||window.webkitAudioContext)();
      if(audioContext.state==='suspended')audioContext.resume();
      const osc=audioContext.createOscillator(), gain=audioContext.createGain();
      osc.type='sine';osc.frequency.value=680+(Math.random()*110);
      gain.gain.setValueAtTime(.022,audioContext.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+.035);
      osc.connect(gain);gain.connect(audioContext.destination);osc.start();osc.stop(audioContext.currentTime+.04);
    }catch(_e){}
  }
  function typeText(el,text,done,speed=23){
    clearInterval(typingTimer);const generation=++typeGeneration;el.textContent='';let i=0;
    typingTimer=setInterval(()=>{
      if(generation!==typeGeneration){clearInterval(typingTimer);return;}
      el.textContent=text.slice(0,++i);
      if(i%3===0&&text[i-1]!==' ')beep();
      el.scrollTop=el.scrollHeight;
      if(i>=text.length){clearInterval(typingTimer);typingTimer=null;if(done)done();}
    },speed);
  }
  function revealAll(el,text,done){clearInterval(typingTimer);typingTimer=null;typeGeneration++;el.textContent=text;el.scrollTop=el.scrollHeight;if(done)done();}
  function typeSynopsis(){typeText(ui.synopsis,synopsis,()=>ui.start.classList.remove('hidden'),25);}
  function reset(){
    clearInterval(typingTimer);typeGeneration++;index=0;lineIndex=0;hp=100;ui.prologue.classList.add('active');ui.play.classList.remove('active');ui.final.classList.add('hidden');ui.inner.classList.add('hidden');ui.objection.classList.add('hidden');ui.start.classList.add('hidden');ui.synopsis.textContent='';ui.stamp.classList.add('hidden');typeSynopsis();
  }
  function startGame(){
    ui.prologue.classList.remove('active');ui.play.classList.add('active');index=0;hp=100;ui.stamp.classList.add('hidden');renderSession();
  }
  function actorFor(name){return ({rudy:'actor-rudy',kalista:'actor-kalista',raya:'actor-raya',setot:'actor-setot',harto:'actor-harto'})[name]||'actor-rudy';}
  function renderSession(){
    const data=sessions[index];if(!data)return;
    lineIndex=0;ui.sessionNumber.textContent=String(index+1).padStart(2,'0');ui.typingSession.textContent=String(index+1).padStart(2,'0');ui.phase.textContent=data.phase;
    ui.dialogueChapter.textContent=`BAB ${String(index+1).padStart(2,'0')} · ${data.chapter}`;ui.dialogueCount.textContent=`${String(index+1).padStart(2,'0')} / 14`;
    ui.location.textContent=`GEDUNG PENGADILAN · ${data.location}`;ui.footerLocation.textContent=data.location;
    ui.hp.textContent=`${hp}%`;ui.hpBar.style.width=`${hp}%`;ui.hpCaption.textContent=hp>=80?'SANGAT PERCAYA DIRI':hp>=60?'MULAI TERDESAK':hp>=40?'GOYAH':hp>=20?'TERPOJOK':'KEHILANGAN KENDALI';
    ui.typing.classList.add('hidden');ui.dialoguePanel.classList.remove('hidden');ui.input.value='';ui.input.classList.remove('has-error','complete');
    ui.stamp.classList.toggle('hidden',index!==13);
    showLine();
  }
  function showLine(){
    const data=sessions[index],line=data.lines[lineIndex];
    if(!line){showTyping();return;}
    ui.speaker.textContent=line[0];ui.role.textContent=line[1];ui.actor.className=`actor ${actorFor(line[2])} active-speaker`;
    revealAll(ui.dialogue,'',()=>typeText(ui.dialogue,line[3],()=>{},20));
  }
  function advanceDialogue(){
    if(!ui.play.classList.contains('active')||!ui.objection.classList.contains('hidden')||!ui.inner.classList.contains('hidden'))return;
    if(typingTimer){revealAll(ui.dialogue,sessions[index].lines[lineIndex][3]);return;}
    lineIndex++;
    if(lineIndex>=sessions[index].lines.length){showTyping();return;}
    showLine();
  }
  function showTyping(){
    ui.dialoguePanel.classList.add('hidden');ui.typing.classList.remove('hidden');ui.target.textContent=sessions[index].target;ui.input.value='';ui.input.classList.remove('has-error','complete');ui.status.textContent='0 KARAKTER';ui.feedback.innerHTML='<span class="status-dot"></span>Ketik paragraf lengkap, lalu tekan Enter.';ui.submit.disabled=true;
    setTimeout(()=>ui.input.focus({preventScroll:true}),80);
  }
  function checkInput(){
    const expected=sessions[index].target,value=ui.input.value;
    let mismatch=false;for(let i=0;i<value.length;i++){if(value[i]!==expected[i]){mismatch=true;break;}}
    ui.input.classList.toggle('has-error',mismatch);ui.input.classList.toggle('complete',value===expected);
    const ratio=Math.min(100,Math.floor(value.length/expected.length*100));
    ui.status.textContent=`${value.length} / ${expected.length} KARAKTER · ${ratio}%`;
    ui.submit.disabled=value!==expected;
    if(mismatch)ui.feedback.innerHTML='<span class="status-dot"></span>Ada karakter yang keliru. Periksa teks merah dan koreksi.';
    else if(value===expected)ui.feedback.innerHTML='<span class="status-dot"></span>Tepat! Tekan Enter atau tombol untuk menyampaikan.';
    else ui.feedback.innerHTML='<span class="status-dot"></span>Teruskan dengan teliti. Tidak ada batas waktu.';
  }
  function showToast(message){ui.toast.textContent=message;ui.toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>ui.toast.classList.remove('show'),2100);}
  function submitArgument(){
    if(ui.submit.disabled)return;
    ui.input.blur();ui.typing.classList.add('hidden');
    if(index<10){hp=Math.max(0,hp-10);ui.hp.textContent=`${hp}%`;ui.hpBar.style.width=`${hp}%`;ui.hpCaption.textContent=hp===0?'KEHILANGAN KENDALI':hp<=30?'TERPOJOK':'MULAI TERDESAK';}
    objectionSequence();
  }
  function objectionSequence(){
    ui.objection.classList.remove('hidden');ui.objection.setAttribute('aria-hidden','false');
    ui.countdown.textContent='09';const started=performance.now();beep();
    const timer=setInterval(()=>{
      const elapsed=(performance.now()-started)/1000,left=Math.max(0,9-Math.floor(elapsed));
      ui.countdown.textContent=String(left).padStart(2,'0');
      if(elapsed>=9){clearInterval(timer);ui.objection.classList.add('hidden');ui.objection.setAttribute('aria-hidden','true');showInner();}
    },80);
  }
  function showInner(){
    const data=sessions[index];ui.innerSpeaker.textContent=data.innerSpeaker;ui.innerText.textContent=data.inner;ui.inner.classList.remove('hidden');
    if(index===13){ui.continue.textContent='LIHAT PUTUSAN AKHIR →';}
    else ui.continue.innerHTML='LANJUTKAN SIDANG <span>→</span>';
  }
  function continueAfterInner(){
    ui.inner.classList.add('hidden');
    if(index===13){showFinal();return;}
    index++;renderSession();
  }
  function showFinal(){
    ui.location.textContent='GEDUNG PENGADILAN · PUTUSAN AKHIR';ui.footerLocation.textContent='PUTUSAN AKHIR';ui.stamp.classList.remove('hidden');
    ui.finalCopy.textContent='Pak Setot dan warga berhak menerima kembali bantuan yang dirampas. Pengusiran dihentikan; perkara diserahkan untuk ditindaklanjuti sesuai hukum. Di lorong pengadilan, warga saling menggenggam tangan. Perbedaan tak menghalangi mereka berdiri bersama. Keadilan tumbuh saat amanah dijaga, martabat disetarakan, dan sesama manusia dihormati.';
    ui.final.classList.remove('hidden');
  }

  $('startBtn').addEventListener('click',startGame);
  $('dialoguePanel').addEventListener('click',advanceDialogue);
  $('argumentInput').addEventListener('input',checkInput);
  $('argumentInput').addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();if(!ui.submit.disabled)submitArgument();else if(ui.input.value.trim())showToast('Bantahan belum tepat. Periksa karakter yang berwarna merah.');}});
  $('submitBtn').addEventListener('click',submitArgument);
  $('continueBtn').addEventListener('click',continueAfterInner);
  $('restartBtn').addEventListener('click',()=>{reset();});
  $('playAgainBtn').addEventListener('click',()=>{ui.final.classList.add('hidden');reset();});
  $('soundBtn').addEventListener('click',()=>{soundOn=!soundOn;ui.sound.textContent=soundOn?'♫':'♪';ui.sound.setAttribute('aria-label',soundOn?'Suara aktif':'Suara mati');});
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&& !ui.final.classList.contains('hidden'))ui.final.classList.add('hidden');
    if(event.key===' '&&ui.play.classList.contains('active')&&ui.typing.classList.contains('hidden')&&ui.inner.classList.contains('hidden')&&ui.objection.classList.contains('hidden')){event.preventDefault();advanceDialogue();}
  });
  typeSynopsis();
})();
