function initAds() {
      if (admob) {
        var adPublisherIds = {
          ios : {
            banner : "ca-app-pub-8440343014846849/3119840614",
            interstitial : "ca-app-pub-8440343014846849/4596573817"
          },
          android : {
			banner: 'ca-app-pub-9249695405712287/3154959152',
			interstitial: 'ca-app-pub-9249695405712287/3301233156'
          }
        };

        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

        admob.setOptions({
          publisherId:      admobid.banner,
          interstitialAdId: admobid.interstitial,
          autoShowBanner: true
        });

        alert("Creating Banner");
        admob.createBannerView();

      } else {
        alert('AdMobAds plugin not ready');
      }
    }

    function onDeviceReady() {
      initAds();
    }

    function onLoad(){
    document.addEventListener("deviceready", onDeviceReady, false);        
    }
