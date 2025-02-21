
    const ZibadisHoldingIcon = 'src/images/logos/zibadis-holding.png';

    const plateIcons = [
      'src/images/logos/3dEsite.png',
      'src/images/logos/Antopeloni.png',
      'src/images/logos/Zibadis.png',
      'src/images/logos/ZibadisPlay.png',
      'src/images/logos/ZinatNet.png',
      'src/images/logos/AsaieJadoo.png',
      'src/images/logos/sahfayaft.png',
      'src/images/logos/yottabyte.png',
    ];
 

    const container = document.getElementById("container");

    const plateMenus = [
      //    1-3desite
      [
   

        { label: "apps", link: "src/pages/3desite/apps.html" },
        { label: "blog", link: "src/pages/3desite/blog.html" },
        { label: "tutorial", link: "src/pages/3desite/tutorial.html" },
        { label: "about", link: "src/pages/3desite/about.html" },
        { label: "shop", link: "src/pages/3desite/shop.html" },
        { label: "services", link: "src/pages/3desite/services.html" },
      
      ],
      //    2-Antopeloni
      [
     
      { label: "apps", link: "src/pages/antopleoni/apps.html" },
      { label: "blog", link: "src/pages/antopleoni/blog.html" },
      { label: "tutorial", link: "src/pages/antopeloni/tutorial.html" },
      { label: "about", link: "src/pages/antopeloni/about.html" },
      { label: "shop", link: "src/pages/antopeloni/shop.html" },
      { label: "services", link: "src/pages/antopeloni/services.html" },
      ],
      //  3-Zibadis
      [ 
         { label: "apps", link: "src/pages/zibadis/apps.html" },
         { label: "blog", link: "src/pages/zibadis/blog.html" },
         { label: "tutorial", link: "src/pages/zibadistutorial.html" },
         { label: "about", link: "src/pages/zibadis/about.html" },
         { label: "shop", link: "src/pages/zibadis/shop.html" },
         { label: "services", link: "src/pages/zibadis/services.html" },
     
      ],
      //  4-zibadisplay
      [ 
        { label: "apps", link: "src/pages/zibadisplay/apps.html" },
        { label: "blog", link: "src/pages/zibadisplay/blog.html" },
        { label: "tutorial", link: "src/pages/zibadisplay/tutorial.html" },
        { label: "about", link: "src/pages/zibadisplay/about.html" },
        { label: "shop", link: "src/pages/zibadisplay/shop.html" },
        { label: "services", link: "src/pages/zibadisplay/services.html" },
      ],
      //5-zinat.net
      [
     
      { label: "apps", link: "src/pages/zinatnet/apps.html" },
      { label: "blog", link: "src/pages/zinatnet/blog.html" },
      { label: "tutorial", link: "src/pages/zinatnet/tutorial.html" },
      { label: "about", link: "src/pages/zinatnet/about.html" },
      { label: "shop", link: "src/pages/zinatnet/shop.html" },
      { label: "services", link: "src/pages/zinatnet/services.html" },
      ],
      // 6-Asaiejadoo 
      [
     
      { label: "apps", link: "src/pages/asaiejadoo/apps.html" },
      { label: "blog", link: "src/pages/asaiejadoo/blog.html" },
      { label: "tutorial", link: "src/pages/asaiejadoo/tutorial.html" },
      { label: "about", link: "src/pages/asaiejadoo/about.html" },
      { label: "shop", link: "src/pages/asaiejadoo/shop.html" },
      { label: "services", link: "src/pages/asaiejadoo/services.html" },
      ],
      // 7-shafayaft
      [,
        { label: "apps", link: "src/pages/shafayaft/apps.html" },
        { label: "blog", link: "src/pages/shafayaft/blog.html" },
        { label: "tutorial", link: "src/pages/shafayaft/tutorial.html" },
        { label: "about", link: "src/pages/shafayaft/about.html" },
        { label: "shop", link: "src/pages/shafayaft/shop.html" },
        { label: "services", link: "src/pages/shafayaft/services.html" },
       
      ],
      //  8-yottabyte
      [,
        { label: "apps", link: "src/pages/yottabyte/apps.html" },
        { label: "blog", link: "src/pages/yottabyte/blog.html" },
        { label: "tutorial", link: "src/pages/yottabyte/tutorial.html" },
        { label: "about", link: "src/pages/yottabyte/about.html" },
        { label: "shop", link: "src/pages/yottabyte/shop.html" },
        { label: "services", link: "src/pages/yottabyte/services.html" },
        
      ],
    ];
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
      console.log(`شروع لود: ${url}`);
    };
    loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
      const progress = Math.floor((itemsLoaded / itemsTotal) * 100);
      document.getElementById('loadingText').textContent = `Loading... ${progress}%`;
    };
    loadingManager.onLoad = function () {

      finishLoading();
    };
    let startTime = 0;
    loadingManager.onStart = function () {
      startTime = performance.now();
    };
    function finishLoading() {
      const elapsed = performance.now() - startTime; 
      const minimumDuration = 2000; 
      if (elapsed < minimumDuration) {
        const remaining = minimumDuration - elapsed;
        setTimeout(() => {
          fadeOutPreloader();
        }, remaining);
      } else {
        fadeOutPreloader();
      }
    }
    function fadeOutPreloader() {
      gsap.to("#preloader", {
        duration: 0.8,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
          document.getElementById("preloader").style.display = "none";
        }
      });
    }

    const scene = new THREE.Scene();
    // 1️⃣ ایجاد یک گروه اصلی برای تمام آبجکت‌ها
const mainGroup = new THREE.Group();
scene.add(mainGroup);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5);
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.querySelector('canvas.webgl') });
    // دیگر append نکنید، چون خودتان از قبل <canvas> را در صفحه دارید
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(0xff0000, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.33;
    renderer.outputEncoding = THREE.sRGBEncoding;
    // scene.background = new THREE.Color( 0xff0000 );
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    document.body.appendChild(renderer.domElement);
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minPolarAngle = 1.17079;
    controls.maxPolarAngle = 1.17079;
    controls.enableDamping = true;
    controls.enableZoom = false;
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    // other lights
    const pointLight = new THREE.PointLight(0xED4714, 0.6);
    pointLight.position.set(-5, -5, 0);
    scene.add(pointLight);
    pointLight.position.y = 0.1 * Math.sin(Date.now() * 0.002) + 0.2;
    pointLight.rotation.y += 0.005;
    const pointLight2 = new THREE.PointLight(0x1495ED, 0.6);
    pointLight2.position.set(5, 5, 3);
    scene.add(pointLight2);
    pointLight2.position.y = 0.1 * Math.sin(Date.now() * 0.002) + 0.2;
    pointLight2.rotation.y += 0.005;
    const ZibadisHolding = new THREE.Object3D();
    let plates = [];
    const gltfLoader = new THREE.GLTFLoader(loadingManager);
    const textureLoader = new THREE.TextureLoader(loadingManager);
    const cubeTextureLoader = new THREE.CubeTextureLoader()
    const environmentMap = cubeTextureLoader.load([
      '/src/images/environmentMap/px.png',
      '/src/images/environmentMap/nx.png',
      '/src/images/environmentMap/py.png',
      '/src/images/environmentMap/ny.png',
      '/src/images/environmentMap/pz.png',
      '/src/images/environmentMap/nz.png',
    ])
    environmentMap.encoding = THREE.sRGBEncoding
    scene.background = environmentMap
    scene.environment = environmentMap
    // load skill-hat
    gltfLoader.load('/src/models/001.gltf', (gltf) => {
      const material = new THREE.MeshStandardMaterial({ color: 0xa3a3a3, metalness: 0.8, roughness: 0, });
      ZibadisHolding.add(gltf.scene);
      ZibadisHolding.scale.set(5.2, 5.2, 5.2);
      ZibadisHolding.traverse((child) => {
        if (child.isMesh) child.material = material;
      });
      mainGroup.add(ZibadisHolding);
      // scene.add(ZibadisHolding);
      const iconTextureFront = textureLoader.load(ZibadisHoldingIcon);
      const iconMaterialFront = new THREE.MeshBasicMaterial({ map: iconTextureFront, transparent: true });
      const iconGeometry = new THREE.PlaneGeometry(0.2, 0.2);
      const iconMeshFront = new THREE.Mesh(iconGeometry, iconMaterialFront);
      iconMeshFront.position.set(0, 0.2, 0.02);
      ZibadisHolding.add(iconMeshFront);
      // شناوری کلاه
      function floatZibadisHolding() {
        requestAnimationFrame(floatZibadisHolding);
        ZibadisHolding.position.y = 0.1 * Math.sin(Date.now() * 0.002) + 0.2;
        // ZibadisHolding.rotation.y += 0.005;
      }
      floatZibadisHolding();
    });
    // create plates
    function createPlates() {
      const numPlates = 8;
      const radius = 1.5;
      for (let i = 0; i < numPlates; i++) {
        const angle = (i / numPlates) * Math.PI * 2;
        gltfLoader.load('/src/models/001.gltf', (gltf) => {
          // متریال دلخواه
          const material = new THREE.MeshStandardMaterial({
            color: 0xa3a3a3,
            metalness: 0.8,
            roughness: 0
          });
          const plate = gltf.scene;
          plate.scale.set(2, 2, 2);
          plate.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
          plate.rotation.x = (Math.PI / 2) + 80;
          plate.traverse((child) => {
            if (child.isMesh) {
              child.material = material;
            }
          });
          // *** به‌جای push ***:
          plates[i] = plate;  // در اندیس i ذخیره کن
          mainGroup.add(plate);
          // آیکن مخصوص این بشقاب
          const iconTex = textureLoader.load(plateIcons[i]); // یا plateIcons[i] 
          const iconMat = new THREE.MeshBasicMaterial({ map: iconTex, transparent: true });
          const iconGeo = new THREE.PlaneGeometry(0.2, 0.2);
          const iconMesh = new THREE.Mesh(iconGeo, iconMat);
          iconMesh.position.set(0, 0.15, 0.02);
          plate.add(iconMesh);
        });
      }
    }
    createPlates();
   










 
    function loadPage(pageUrl) {
      fetch(pageUrl)
          .then(response => response.text())
          .then(data => {
              document.getElementById("container").innerHTML = data;
          })
          .catch(error => {
              console.error("خطا در بارگیری صفحه:", error);
              document.getElementById("container").innerHTML = "<p>خطایی رخ داد. لطفاً دوباره تلاش کنید.</p>";
          });
  }
  
  async function updatePlateMenu(plateIndex) {
      const navList = document.getElementById("topMenuList");
      const container = document.getElementById("container"); // اطمینان از وجود کانتینر
      
      navList.innerHTML = "";
      container.innerHTML = ""; // پاک کردن محتوای قبلی
      
      const currentMenu = plateMenus[plateIndex] || [];
  
      for (const item of currentMenu) {
          try {
              // ابتدا اولین صفحه را لود نکنیم تا فقط با کلیک اجرا شود
          } catch (error) {
              console.error("Error loading the HTML pages:", error);
          }
  
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.textContent = item.label; 
          a.href = "#";  // غیرفعال کردن تغییر مسیر
          a.addEventListener("click", (event) => {
              event.preventDefault(); // جلوگیری از باز شدن لینک در صفحه جدید
              loadPage(item.link);
          });
  
          li.appendChild(a);
          navList.appendChild(li);
      }
  
      waveInMenuItems();
  }
  

 
  
  








   

 




































    const modal = document.getElementById('infoModal');
    // متغیرهای state
// متغیرهای state
let isModalOpen = false; // وضعیت باز یا بسته بودن مودال
let originalGroupY = 0;  // موقعیت اولیه mainGroup

// تابع برای حرکت گروه به پایین
function moveGroupDown(distance) {
  const modal = document.getElementById("infoModal");

  // بررسی باز بودن مودال
  if ( isModalOpen) {
    originalGroupY = mainGroup.position.y; // ذخیره موقعیت فعلی
    gsap.to(mainGroup.position, {
      y: mainGroup.position.y - distance,
      duration: 1,
      ease: "power2.inOut"
    });
  }
}

    window.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(plates, true);
      if (intersects.length > 0) {
        const clickedPlateIndex = plates.indexOf(intersects[0].object.parent);
        if (clickedPlateIndex !== -1) {

          showPlateModal(clickedPlateIndex);
          moveGroupDown(2);
          
        }
      }
    });


function showPlateModal(index) {
  const modal = document.getElementById('infoModal');
  isModalOpen = true; 
  modal.style.display = 'flex';
  gsap.to(modal, {
    duration: 0.5,
    opacity: 1,
    scale: 1,
    ease: "back.out(1.7)"
  });

  updatePlateMenu(index);
}
    function resetMenuToHome() {
      const navList = document.getElementById("topMenuList");
      navList.innerHTML = "";
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = "Home";
      a.href = "#";
      li.appendChild(a);
      navList.appendChild(li);
    }
    
function hidePlateModal() {
  const modal = document.getElementById('infoModal');
  isModalOpen = false; 

  gsap.to(modal, {
    duration: 0.4,
    opacity: 0,
    scale: 0.7,
    ease: "power2.inOut",
    onComplete: () => {
      modal.style.display = 'none';

     
      gsap.to(mainGroup.position, {
        y: originalGroupY,
        duration: 1,
        ease: "power2.inOut"
      });

      resetMenuToHome();
      waveInMenuItems();
    }
  });
}

    
    function waveInMenuItems() {

      const liItems = document.querySelectorAll("#topMenuList li");
      liItems.forEach((li, i) => {
        gsap.from(li, {
          duration: 0.5,
          y: -10,     
          opacity: 0,
          ease: "power4.inOut",
          delay: i * 0.2
        });
      });
    }
    function waveOutMenuItems(onComplete) {
      const liItems = document.querySelectorAll("#topMenuList li");
      if (!liItems.length) {
       
        onComplete && onComplete();
        return;
      }
      gsap.to(liItems, {
        duration: 0.5,
        y: 10,      
        opacity: 0,
        ease: "power4.inOut",

        stagger: 0.2,
        onComplete: () => {

          onComplete && onComplete();
        }
      });
    }
    function animate() {
      requestAnimationFrame(animate);
      plates.forEach((plate, index) => {

        plate.position.y = Math.sin(Date.now() * 0.002 + index) * 0.1;

        plate.children.forEach(child => {
          if (child.isMesh && child.geometry.type === 'PlaneGeometry') {
            const lookAtY = camera.position.clone();
            lookAtY.y = child.position.y;
            child.lookAt(lookAtY);
          }
        });
      });

      const lookAtY = camera.position.clone();
      lookAtY.y = ZibadisHolding.position.y;
      ZibadisHolding.lookAt(lookAtY);
      controls.update();
      renderer.render(scene, camera);

    }
    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });