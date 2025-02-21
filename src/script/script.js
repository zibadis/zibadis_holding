
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
    const sitePaths = [
      'src/pages/site1.html',
      'src/pages/site2.html',
      'src/pages/site3.html',
      'src/pages/site4.html',
      'src/pages/site5.html',
      'src/pages/site6.html',
      'src/pages/site7.html',
      'src/pages/site8.html'
    ];

    const container = document.getElementById("container");

    const plateMenus = [
      //    1-3desite
      [
        {
          inside:
            [
              { name: "Z-Scan", src: "icons/z-book.png" },
              { name: "Z-Print", src: "icons/z-emergency.png" },
              { name: "Z-Model", src: "icons/z-emergency.png" },
              { name: "Z-AR", src: "icons/z-emergency.png" },
              
            ]
        },

        { label: "apps", link: "src/pages/3desite/apps.html" },
        // { label: "blog", link: "#p1-2" },
        // { label: "tutorial", link: "#p1-2" },
        // { label: "about", link: "#p1-2" },
        // { label: "shop", link: "#p1-1" },
        // { label: "services", link: "#p1-2" },
      ],
      //    2-Antopeloni
      [{
        inside:
          [
            { name: "Z-Doctor", src: "icons/z-book.png" },
            { name: "Z-Lab", src: "icons/z-emergency.png" },
            { name: "Z-Pharma", src: "icons/z-emergency.png" },
            { name: "Z-Medical", src: "icons/z-emergency.png" },
            { name: "Z-Emergency ", src: "icons/z-emergency.png" },
            { name: "Z-Fitness", src: "icons/z-emergency.png" },
            { name: "Z-Nutrition", src: "icons/z-emergency.png" },
            { name: "Z-Psychology", src: "icons/z-emergency.png" },
            { name: "Z-WomenCare", src: "icons/z-emergency.png" },
            { name: "Z-Baby", src: "icons/z-emergency.png" },
            
           
          ]
      },
      { label: "apps", link: "src/pages/3desite/apps.html" },
      // { label: "apps", link: "#p1-1" },
      //   { label: "blog", link: "#p1-2" },
      //   { label: "tutorial", link: "#p1-2" },
      //   { label: "about", link: "#p1-2" },
      //   { label: "shop", link: "#p1-1" },
      //   { label: "services", link: "#p1-2" },
      ],
      //  3-Zibadis
      [{
        inside:
          [
            { name: "Z-Graphic", src: "icons/z-book.png" },
            { name: "Z-Motion", src: "icons/z-emergency.png" },
            { name: "Z-3D", src: "icons/z-emergency.png" },
            { name: "Z-Web", src: "icons/z-emergency.png" },
          ]
      },    { label: "apps", link: "src/pages/3desite/apps.html" },
      // { label: "apps", link: "#p1-1" },
      //   { label: "blog", link: "#p1-2" },
      //   { label: "tutorial", link: "#p1-2" },
      //   { label: "about", link: "#p1-2" },
      //   { label: "shop", link: "#p1-1" },
      //   { label: "services", link: "#p1-2" },
      ],
      //  4-zibadisplay
      [{
        inside:
          [
            { name: "Z-Movie", src: "icons/z-book.png" },
            { name: "Z-Music", src: "icons/z-emergency.png" },
            { name: "Z-Books", src: "icons/z-emergency.png" },
            { name: "Z-Games", src: "icons/z-emergency.png" },
            { name: "Z-Sports", src: "icons/z-emergency.png" },
            { name: "Z-Books", src: "icons/z-emergency.png" },
            { name: "Z-Travel", src: "icons//z-emergency.png" },
          ]
      },
      { label: "apps", link: "src/pages/3desite/apps.html" },
        // { label: "blog", link: "#p1-2" },
        // { label: "tutorial", link: "#p1-2" },
        // { label: "about", link: "#p1-2" },
        // { label: "shop", link: "#p1-1" },
        // { label: "services", link: "#p1-2" },
      ],
      //5-zinat.net
      [{
        inside:
          [
            { name: "Z-Fashion", src: "icons/z-book.png" },
            { name: "Z-Arch", src: "icons/z-emergency.png" },
            { name: "Z-Jewelry", src: "icons/z-emergency.png" },
            { name: "Z-Enviro", src: "icons/z-emergency.png" },
            { name: "Z-Arch", src: "icons/z-emergency.png" },
          ]
      },
      { label: "apps", link: "src/pages/3desite/apps.html" },
      //   { label: "blog", link: "#p1-2" },
      //   { label: "tutorial", link: "#p1-2" },
      //   { label: "about", link: "#p1-2" },
      //   { label: "shop", link: "#p1-1" },
      //   { label: "services", link: "#p1-2" },
      ],
      // 6-Asaiejadoo 
      [{
        inside:
          [
            { name: "Z-Bank", src: "icons/z-book.png" },
            { name: "Z-Insurance", src: "icons/z-emergency.png" },
            { name: "Z-Education", src: "icons/z-emergency.png" },
            { name: "Z-Transport ", src: "icons/z-emergency.png" },
            { name: "Z-Energy", src: "icons/z-emergency.png" },
           

          ]
      },
      { label: "apps", link: "src/pages/3desite/apps.html" },
      //   { label: "blog", link: "#p1-2" },
      //   { label: "tutorial", link: "#p1-2" },
      //   { label: "about", link: "#p1-2" },
      //   { label: "shop", link: "#p1-1" },
      //   { label: "services", link: "#p1-2" },
      ],
      // 7-shafayaft
      [{
        inside:
          [
            { name: "Z-Meditate", src: "icons/z-book.png" },
            { name: "Z-Focus", src: "icons/z-emergency.png" },
            { name: "Z-AntiStress", src: "icons/z-emergency.png" },
            { name: "Z-Behavior", src: "icons/z-emergency.png" },
         

          ]
      },
      { label: "apps", link: "src/pages/3desite/apps.html" },
      //   { label: "blog", link: "#p1-2" },
      //   { label: "tutorial", link: "#p1-2" },
      //   { label: "about", link: "#p1-2" },
      //   { label: "shop", link: "#p1-1" },
      //   { label: "services", link: "#p1-2" },
      ],
      //  8-yottabyte
      [{
        inside:
          [
            { name: "Z-Data", src: "icons/z-book.png" },
            { name: "Z-Cyber", src: "icons/z-emergency.png" },
            { name: "Z-AI", src: "icons/z-emergency.png" },
            { name: "Z-Cloud", src: "icons/z-cloud.png" },
            { name: "Z-IoT", src: "icons/z-emergency.png" },
            { name: "Z-Block", src: "icons/z-emergency.png" },
            { name: "Z-Quantum", src: "icons/z-emergency.png" },
          
          ]
      },
      { label: "apps", link: "src/pages/3desite/apps.html" },
      //   { label: "blog", link: "#p1-2" },
      //   { label: "tutorial", link: "#p1-2" },
      //   { label: "about", link: "#p1-2" },
      //   { label: "shop", link: "#p1-1" },
      //   { label: "services", link: "#p1-2" },
        
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
              container.innerHTML = data;
          })
          .catch(error => {
              console.error("خطا در بارگیری صفحه:", error);
              container.innerHTML = "<p>خطایی رخ داد. لطفاً دوباره تلاش کنید.</p>";
          });
  }


    async function updatePlateMenu(plateIndex) {
      const navList = document.getElementById("topMenuList");
      const container = document.getElementById("container"); // Ensure container exists
      
      navList.innerHTML = "";
      container.innerHTML = ""; // Clear previous content
      
      const currentMenu = plateMenus[plateIndex] || [];
  
      for (const item of currentMenu) {
          try {
              // const response = await fetch(item.link);
              // const data = await response.text();
              // container.innerHTML += data; // Append instead of replace
              loadPage(item.link)
          } catch (error) {
              console.error("Error loading the HTML pages:", error);
          }
  
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.textContent = item.label; 
          a.href = item.link;  
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