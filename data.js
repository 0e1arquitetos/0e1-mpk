var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala---cozinha-aberta",
      "name": "SALA - COZINHA ABERTA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.011668475547910617,
        "pitch": 0.044123990255489076,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.30450573985763185,
          "pitch": 0.3773203792848907,
          "rotation": 6.283185307179586,
          "target": "4-corredor"
        },
        {
          "yaw": -0.33148992666232147,
          "pitch": 0.3741468687347034,
          "rotation": 0,
          "target": "2-cozinha-aberta"
        },
        {
          "yaw": -0.1418048819993274,
          "pitch": 1.2224588678089265,
          "rotation": 0,
          "target": "1-sala--cozinha-fechada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala--cozinha-fechada",
      "name": "SALA | COZINHA FECHADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.29938377988678866,
          "pitch": 0.38138630807894813,
          "rotation": 12.566370614359176,
          "target": "4-corredor"
        },
        {
          "yaw": -0.3929285405528873,
          "pitch": 0.3906787241302965,
          "rotation": 0,
          "target": "3-cozinha-fechada"
        },
        {
          "yaw": -0.14081271437044585,
          "pitch": 1.2681892760265079,
          "rotation": 0,
          "target": "0-sala---cozinha-aberta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cozinha-aberta",
      "name": "COZINHA ABERTA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.01834812386061202,
        "pitch": 0.028424216645174027,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.9761329508369965,
          "pitch": 0.44865579735248495,
          "rotation": 0,
          "target": "0-sala---cozinha-aberta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cozinha-fechada",
      "name": "COZINHA FECHADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9450482200460435,
          "pitch": 0.5314363391178141,
          "rotation": 0,
          "target": "1-sala--cozinha-fechada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corredor",
      "name": "CORREDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.043260078657475276,
        "pitch": 0.06403082945745098,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.7106570939557777,
          "pitch": 0.5453152687467835,
          "rotation": 0,
          "target": "5-quarto-01"
        },
        {
          "yaw": -0.02780040832917763,
          "pitch": 0.46107310575862215,
          "rotation": 0,
          "target": "7-suite"
        },
        {
          "yaw": -3.128622876711125,
          "pitch": 0.22445961461638042,
          "rotation": 0,
          "target": "0-sala---cozinha-aberta"
        },
        {
          "yaw": -0.40429455552407134,
          "pitch": 0.56742571427651,
          "rotation": 0,
          "target": "6-quarto-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-quarto-01",
      "name": "QUARTO 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -3.1218828514917014,
        "pitch": 0.06694862726790873,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.6499854694857845,
          "pitch": 0.5856416721842326,
          "rotation": 0,
          "target": "6-quarto-02"
        },
        {
          "yaw": 1.4311138826224035,
          "pitch": 0.4362965525107487,
          "rotation": 0,
          "target": "4-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-quarto-02",
      "name": "QUARTO 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5355635392211289,
          "pitch": 0.694265263046999,
          "rotation": 0,
          "target": "4-corredor"
        },
        {
          "yaw": -3.0572844243025656,
          "pitch": 0.8506737408850427,
          "rotation": 0,
          "target": "5-quarto-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-suite",
      "name": "SUITE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -3.1167803382084163,
        "pitch": -0.011988161993260249,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.4926331177079515,
          "pitch": 0.23341898534310346,
          "rotation": 0,
          "target": "4-corredor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MPK - EP V01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
