// قائمة المعرفات المسموح لها (يمكنك زيادتها)
const AUTHORIZED_KEYS = [
    "1545725305",
    "1546260521",
    "1546426113",
    "1546592721",
    "1545655895",
    "1546494565",
    "1546059173",
    "1545648061",
    "1546494647",
    "1546362957",
    "1546555263",
    "1546625497",
    "1546431825",
    "1546456609",
    "1546468807",
    "1546339389",
    "1546337899",
    "1546569203",
    "1546545267",
    "1546413237",
    "1546565855",
    "1546524035",
    "1545763805",
    "1546286617",
    "1546529643",
    "1546503137",
    "1545662773",
    "1546271359",
    "1546529165",
    "1545656313",
    "1545647467",
    "1546276805",
    "1545653585",
    "1546407617",
    "1546411789",
    "1546435923",
    "1546413155",
    "1537348743",
    "1546483579",
    "1546248707",
    "1546322129",
    "1546297743",
    "1546242699",
    "1546209585",
    "1545769725",
    "1546231287",
    "1546277899",
    "1546218459",
    "1546238775",
    "1546159189",
    "1546221729",
    "1546146175",
    "1546256335",
    "1546161193",
    "1546121577",
    "1546201627",
    "1546215593",
    "1545657187",
    "1545628487",
    "1546132983",
    "1546188265",
    "1545675885",
    "1546117927",
    "1543938121",
    "1546125681",
    "1546056131",
    "1546083605",
    "1545661731",
    "1546023491",
    "1545670149",
    "1546055919",
    "1546022673",
    "1546090089",
    "1546051497",
    "1546011669",
    "1545675695",
    "1545665213",
    "1545691541",
    "1545686619",
    "1545689959",
    "1545660791",
    "1545699275",
    "1545702685",
    "1545691627",
    "1545708061",
    "1545711535",
    "1545704445",
    "1545735237",
    "1545725775",
    "1545757863",
    "1545751023",
    "1545753341",
    "1545762037",
    "1545764629",
    "1546124597",
    "1545712619",
    "1545650063",
    "1545989379",
    "1546014769",
];

function limitInput(el) {
    if(el.value.length > 10) el.value = el.value.slice(0, 10);
    document.getElementById('char-count').innerText = el.value.length + "/10";
}

function initiateAuth() {
    const idVal = document.getElementById('id-field').value;
    
    if(idVal.length !== 10) {
        alert("خطأ: يرجى إدخال المعرف المكون من 10 أرقام كاملاً.");
        return;
    }

    // إظهار نافذة التحليل
    const modal = document.getElementById('processingModal');
    modal.style.display = 'flex';
    
    runSimulation(idVal);
}

async function runSimulation(id) {
    const logs = [
        "> جاري الاتصال بسيرفر VINIS_CORE...",
        "> تشفير المعرف البيومتري...",
        "> فحص الصلاحيات الأمنية...",
        "> جاري مطابقة المفتاح الرقمي...",
        "> استجابة السيرفر: تم التحقق."
    ];
    
    const logBox = document.getElementById('logStream');
    const pFill = document.getElementById('pFill');
    
    for(let i = 0; i < logs.length; i++) {
        let p = document.createElement('div');
        p.innerText = logs[i];
        logBox.appendChild(p);
        
        // تحريك الـ Progress Bar
        pFill.style.width = ((i + 1) * 20) + "%";
        
        await new Promise(r => setTimeout(r, 700));
    }

    // التحقق النهائي
    setTimeout(() => {
        if(AUTHORIZED_KEYS.includes(id)) {
            window.location.href = "results.html";
        } else {
            document.getElementById('processingModal').style.display = 'none';
            document.getElementById('errorModal').style.display = 'flex';
        }
    }, 500);
}

function closeModals() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById('logStream').innerHTML = "";
    document.getElementById('pFill').style.width = "0%";
}

// إنشاء خلفية "الأكواد" عشوائياً
function createCodeRain() {
    const rain = document.getElementById('codeRain');
    for(let i = 0; i < 50; i++) {
        let span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.left = Math.random() * 100 + "vw";
        span.style.top = Math.random() * 100 + "vh";
        span.innerText = Math.random().toString(36).substring(2, 15);
        rain.appendChild(span);
    }
}

createCodeRain();



































































































