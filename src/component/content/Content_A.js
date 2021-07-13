import React from 'react'
import MyResponsiveChoroplethCanvas from './ResponsiveChoroplethCanvas'
function Content_A() {
    const data = 
    [
        {
          "id": "AFG",
          "value": 369135
        },
        {
          "id": "AGO",
          "value": 547383
        },
        {
          "id": "ALB",
          "value": 525726
        },
        {
          "id": "ARE",
          "value": 998548
        },
        {
          "id": "ARG",
          "value": 820162
        },
        {
          "id": "ARM",
          "value": 352086
        },
        {
          "id": "ATA",
          "value": 898375
        },
        {
          "id": "ATF",
          "value": 560787
        },
        {
          "id": "AUT",
          "value": 693634
        },
        {
          "id": "AZE",
          "value": 581969
        },
        {
          "id": "BDI",
          "value": 842232
        },
        {
          "id": "BEL",
          "value": 68048
        },
        {
          "id": "BEN",
          "value": 452691
        },
        {
          "id": "BFA",
          "value": 774789
        },
        {
          "id": "BGD",
          "value": 82153
        },
        {
          "id": "BGR",
          "value": 740674
        },
        {
          "id": "BHS",
          "value": 648917
        },
        {
          "id": "BIH",
          "value": 477941
        },
        {
          "id": "BLR",
          "value": 709882
        },
        {
          "id": "BLZ",
          "value": 262351
        },
        {
          "id": "BOL",
          "value": 456860
        },
        {
          "id": "BRN",
          "value": 524229
        },
        {
          "id": "BTN",
          "value": 619831
        },
        {
          "id": "BWA",
          "value": 618878
        },
        {
          "id": "CAF",
          "value": 885772
        },
        {
          "id": "CAN",
          "value": 678150
        },
        {
          "id": "CHE",
          "value": 265088
        },
        {
          "id": "CHL",
          "value": 123301
        },
        {
          "id": "CHN",
          "value": 291918
        },
        {
          "id": "CIV",
          "value": 603266
        },
        {
          "id": "CMR",
          "value": 580514
        },
        {
          "id": "COG",
          "value": 397968
        },
        {
          "id": "COL",
          "value": 191328
        },
        {
          "id": "CRI",
          "value": 911821
        },
        {
          "id": "CUB",
          "value": 144859
        },
        {
          "id": "-99",
          "value": 209184
        },
        {
          "id": "CYP",
          "value": 326155
        },
        {
          "id": "CZE",
          "value": 958890
        },
        {
          "id": "DEU",
          "value": 675123
        },
        {
          "id": "DJI",
          "value": 347419
        },
        {
          "id": "DNK",
          "value": 716515
        },
        {
          "id": "DOM",
          "value": 867389
        },
        {
          "id": "DZA",
          "value": 97055
        },
        {
          "id": "ECU",
          "value": 48257
        },
        {
          "id": "EGY",
          "value": 647321
        },
        {
          "id": "ERI",
          "value": 122843
        },
        {
          "id": "ESP",
          "value": 1919
        },
        {
          "id": "EST",
          "value": 959633
        },
        {
          "id": "ETH",
          "value": 626339
        },
        {
          "id": "FIN",
          "value": 354669
        },
        {
          "id": "FJI",
          "value": 401735
        },
        {
          "id": "FLK",
          "value": 462720
        },
        {
          "id": "FRA",
          "value": 150187
        },
        {
          "id": "GAB",
          "value": 888303
        },
        {
          "id": "GBR",
          "value": 647261
        },
        {
          "id": "GEO",
          "value": 638707
        },
        {
          "id": "GHA",
          "value": 526734
        },
        {
          "id": "GIN",
          "value": 378116
        },
        {
          "id": "GMB",
          "value": 144286
        },
        {
          "id": "GNB",
          "value": 234440
        },
        {
          "id": "GNQ",
          "value": 3074
        },
        {
          "id": "GRC",
          "value": 960854
        },
        {
          "id": "GTM",
          "value": 721438
        },
        {
          "id": "GUY",
          "value": 944491
        },
        {
          "id": "HND",
          "value": 315757
        },
        {
          "id": "HRV",
          "value": 634440
        },
        {
          "id": "HTI",
          "value": 686224
        },
        {
          "id": "HUN",
          "value": 250854
        },
        {
          "id": "IDN",
          "value": 90254
        },
        {
          "id": "IND",
          "value": 73180
        },
        {
          "id": "IRL",
          "value": 272807
        },
        {
          "id": "IRN",
          "value": 650134
        },
        {
          "id": "IRQ",
          "value": 463426
        },
        {
          "id": "ISL",
          "value": 959743
        },
        {
          "id": "ISR",
          "value": 828356
        },
        {
          "id": "ITA",
          "value": 992138
        },
        {
          "id": "JAM",
          "value": 357098
        },
        {
          "id": "JOR",
          "value": 756031
        },
        {
          "id": "JPN",
          "value": 157613
        },
        {
          "id": "KAZ",
          "value": 193576
        },
        {
          "id": "KEN",
          "value": 884887
        },
        {
          "id": "KGZ",
          "value": 11021
        },
        {
          "id": "KHM",
          "value": 510567
        },
        {
          "id": "OSA",
          "value": 233965
        },
        {
          "id": "KWT",
          "value": 936758
        },
        {
          "id": "LAO",
          "value": 505089
        },
        {
          "id": "LBN",
          "value": 118813
        },
        {
          "id": "LBR",
          "value": 338773
        },
        {
          "id": "LBY",
          "value": 799594
        },
        {
          "id": "LKA",
          "value": 849771
        },
        {
          "id": "LSO",
          "value": 280113
        },
        {
          "id": "LTU",
          "value": 987030
        },
        {
          "id": "LUX",
          "value": 916288
        },
        {
          "id": "LVA",
          "value": 636571
        },
        {
          "id": "MAR",
          "value": 397551
        },
        {
          "id": "MDA",
          "value": 886104
        },
        {
          "id": "MDG",
          "value": 672590
        },
        {
          "id": "MEX",
          "value": 417918
        },
        {
          "id": "MKD",
          "value": 176977
        },
        {
          "id": "MLI",
          "value": 889574
        },
        {
          "id": "MMR",
          "value": 963888
        },
        {
          "id": "MNE",
          "value": 354242
        },
        {
          "id": "MNG",
          "value": 350655
        },
        {
          "id": "MOZ",
          "value": 96657
        },
        {
          "id": "MRT",
          "value": 669649
        },
        {
          "id": "MWI",
          "value": 440248
        },
        {
          "id": "MYS",
          "value": 529871
        },
        {
          "id": "NAM",
          "value": 56062
        },
        {
          "id": "NCL",
          "value": 452362
        },
        {
          "id": "NER",
          "value": 729640
        },
        {
          "id": "NGA",
          "value": 146744
        },
        {
          "id": "NIC",
          "value": 859441
        },
        {
          "id": "NLD",
          "value": 9118
        },
        {
          "id": "NOR",
          "value": 952686
        },
        {
          "id": "NPL",
          "value": 73493
        },
        {
          "id": "NZL",
          "value": 297668
        },
        {
          "id": "OMN",
          "value": 987057
        },
        {
          "id": "PAK",
          "value": 701181
        },
        {
          "id": "PAN",
          "value": 771108
        },
        {
          "id": "PER",
          "value": 549971
        },
        {
          "id": "PHL",
          "value": 239616
        },
        {
          "id": "PNG",
          "value": 741151
        },
        {
          "id": "POL",
          "value": 506893
        },
        {
          "id": "PRI",
          "value": 748679
        },
        {
          "id": "PRT",
          "value": 358722
        },
        {
          "id": "PRY",
          "value": 716805
        },
        {
          "id": "QAT",
          "value": 412072
        },
        {
          "id": "ROU",
          "value": 826360
        },
        {
          "id": "RUS",
          "value": 118507
        },
        {
          "id": "RWA",
          "value": 770606
        },
        {
          "id": "ESH",
          "value": 343656
        },
        {
          "id": "SAU",
          "value": 718416
        },
        {
          "id": "SDN",
          "value": 549414
        },
        {
          "id": "SDS",
          "value": 458509
        },
        {
          "id": "SEN",
          "value": 367323
        },
        {
          "id": "SLB",
          "value": 818206
        },
        {
          "id": "SLE",
          "value": 473815
        },
        {
          "id": "SLV",
          "value": 822339
        },
        {
          "id": "ABV",
          "value": 720835
        },
        {
          "id": "SOM",
          "value": 37067
        },
        {
          "id": "SRB",
          "value": 503340
        },
        {
          "id": "SUR",
          "value": 436269
        },
        {
          "id": "SVK",
          "value": 52650
        },
        {
          "id": "SVN",
          "value": 737875
        },
        {
          "id": "SWZ",
          "value": 66579
        },
        {
          "id": "SYR",
          "value": 352447
        },
        {
          "id": "TCD",
          "value": 192835
        },
        {
          "id": "TGO",
          "value": 558251
        },
        {
          "id": "THA",
          "value": 335829
        },
        {
          "id": "TJK",
          "value": 211167
        },
        {
          "id": "TKM",
          "value": 369623
        },
        {
          "id": "TLS",
          "value": 118368
        },
        {
          "id": "TTO",
          "value": 407143
        },
        {
          "id": "TUN",
          "value": 442741
        },
        {
          "id": "TUR",
          "value": 601476
        },
        {
          "id": "TWN",
          "value": 888310
        },
        {
          "id": "TZA",
          "value": 420022
        },
        {
          "id": "UGA",
          "value": 689148
        },
        {
          "id": "UKR",
          "value": 970979
        },
        {
          "id": "URY",
          "value": 265249
        },
        {
          "id": "USA",
          "value": 518758
        },
        {
          "id": "UZB",
          "value": 965795
        },
        {
          "id": "VEN",
          "value": 798451
        },
        {
          "id": "VNM",
          "value": 281411
        },
        {
          "id": "VUT",
          "value": 620595
        },
        {
          "id": "PSE",
          "value": 47077
        },
        {
          "id": "YEM",
          "value": 865245
        },
        {
          "id": "ZAF",
          "value": 884065
        },
        {
          "id": "ZMB",
          "value": 699582
        },
        {
          "id": "ZWE",
          "value": 618803
        },
        {
          "id": "KOR",
          "value": 867229
        }
    ]
    const data2 = [
        {
          "id": "AFG",
          "value": 301899
        },
        {
          "id": "AGO",
          "value": 470861
        },
        {
          "id": "ALB",
          "value": 852329
        },
        {
          "id": "ARE",
          "value": 582900
        },
        {
          "id": "ARG",
          "value": 447228
        },
        {
          "id": "ARM",
          "value": 596586
        },
        {
          "id": "ATA",
          "value": 612490
        },
        {
          "id": "ATF",
          "value": 209614
        },
        {
          "id": "AUT",
          "value": 622163
        },
        {
          "id": "AZE",
          "value": 432606
        },
        {
          "id": "BDI",
          "value": 569910
        },
        {
          "id": "BEL",
          "value": 532858
        },
        {
          "id": "BEN",
          "value": 515008
        },
        {
          "id": "BFA",
          "value": 160199
        },
        {
          "id": "BGD",
          "value": 38823
        },
        {
          "id": "BGR",
          "value": 946486
        },
        {
          "id": "BHS",
          "value": 991863
        },
        {
          "id": "BIH",
          "value": 707830
        },
        {
          "id": "BLR",
          "value": 283045
        },
        {
          "id": "BLZ",
          "value": 305716
        },
        {
          "id": "BOL",
          "value": 119003
        },
        {
          "id": "BRN",
          "value": 317080
        },
        {
          "id": "BTN",
          "value": 67901
        },
        {
          "id": "BWA",
          "value": 151256
        },
        {
          "id": "CAF",
          "value": 571520
        },
        {
          "id": "CAN",
          "value": 659677
        },
        {
          "id": "CHE",
          "value": 130204
        },
        {
          "id": "CHL",
          "value": 751492
        },
        {
          "id": "CHN",
          "value": 544657
        },
        {
          "id": "CIV",
          "value": 68438
        },
        {
          "id": "CMR",
          "value": 858399
        },
        {
          "id": "COG",
          "value": 952883
        },
        {
          "id": "COL",
          "value": 248182
        },
        {
          "id": "CRI",
          "value": 851072
        },
        {
          "id": "CUB",
          "value": 666868
        },
        {
          "id": "-99",
          "value": 912478
        },
        {
          "id": "CYP",
          "value": 410623
        },
        {
          "id": "CZE",
          "value": 657821
        },
        {
          "id": "DEU",
          "value": 266349
        },
        {
          "id": "DJI",
          "value": 625629
        },
        {
          "id": "DNK",
          "value": 912334
        },
        {
          "id": "DOM",
          "value": 112773
        },
        {
          "id": "DZA",
          "value": 351647
        },
        {
          "id": "ECU",
          "value": 623764
        },
        {
          "id": "EGY",
          "value": 794814
        },
        {
          "id": "ERI",
          "value": 378053
        },
        {
          "id": "ESP",
          "value": 524293
        },
        {
          "id": "EST",
          "value": 241966
        },
        {
          "id": "ETH",
          "value": 769271
        },
        {
          "id": "FIN",
          "value": 59934
        },
        {
          "id": "FJI",
          "value": 963828
        },
        {
          "id": "FLK",
          "value": 796916
        },
        {
          "id": "FRA",
          "value": 520402
        },
        {
          "id": "GAB",
          "value": 106947
        },
        {
          "id": "GBR",
          "value": 484386
        },
        {
          "id": "GEO",
          "value": 526229
        },
        {
          "id": "GHA",
          "value": 441256
        },
        {
          "id": "GIN",
          "value": 535584
        },
        {
          "id": "GMB",
          "value": 486811
        },
        {
          "id": "GNB",
          "value": 821181
        },
        {
          "id": "GNQ",
          "value": 882359
        },
        {
          "id": "GRC",
          "value": 685441
        },
        {
          "id": "GTM",
          "value": 156351
        },
        {
          "id": "GUY",
          "value": 127552
        },
        {
          "id": "HND",
          "value": 100096
        },
        {
          "id": "HRV",
          "value": 396069
        },
        {
          "id": "HTI",
          "value": 442855
        },
        {
          "id": "HUN",
          "value": 275415
        },
        {
          "id": "IDN",
          "value": 782636
        },
        {
          "id": "IND",
          "value": 73667
        },
        {
          "id": "IRL",
          "value": 659619
        },
        {
          "id": "IRN",
          "value": 26399
        },
        {
          "id": "IRQ",
          "value": 991864
        },
        {
          "id": "ISL",
          "value": 622127
        },
        {
          "id": "ISR",
          "value": 172375
        },
        {
          "id": "ITA",
          "value": 998052
        },
        {
          "id": "JAM",
          "value": 726976
        },
        {
          "id": "JOR",
          "value": 920070
        },
        {
          "id": "JPN",
          "value": 135508
        },
        {
          "id": "KAZ",
          "value": 162691
        },
        {
          "id": "KEN",
          "value": 593091
        },
        {
          "id": "KGZ",
          "value": 153568
        },
        {
          "id": "KHM",
          "value": 431510
        },
        {
          "id": "OSA",
          "value": 705698
        },
        {
          "id": "KWT",
          "value": 780765
        },
        {
          "id": "LAO",
          "value": 136463
        },
        {
          "id": "LBN",
          "value": 650014
        },
        {
          "id": "LBR",
          "value": 849837
        },
        {
          "id": "LBY",
          "value": 208228
        },
        {
          "id": "LKA",
          "value": 529382
        },
        {
          "id": "LSO",
          "value": 878318
        },
        {
          "id": "LTU",
          "value": 373832
        },
        {
          "id": "LUX",
          "value": 486351
        },
        {
          "id": "LVA",
          "value": 786983
        },
        {
          "id": "MAR",
          "value": 913295
        },
        {
          "id": "MDA",
          "value": 860492
        },
        {
          "id": "MDG",
          "value": 880863
        },
        {
          "id": "MEX",
          "value": 840113
        },
        {
          "id": "MKD",
          "value": 120929
        },
        {
          "id": "MLI",
          "value": 402967
        },
        {
          "id": "MMR",
          "value": 130552
        },
        {
          "id": "MNE",
          "value": 220398
        },
        {
          "id": "MNG",
          "value": 954505
        },
        {
          "id": "MOZ",
          "value": 997788
        },
        {
          "id": "MRT",
          "value": 77249
        },
        {
          "id": "MWI",
          "value": 125348
        },
        {
          "id": "MYS",
          "value": 513829
        },
        {
          "id": "NAM",
          "value": 50502
        },
        {
          "id": "NCL",
          "value": 356122
        },
        {
          "id": "NER",
          "value": 219323
        },
        {
          "id": "NGA",
          "value": 320184
        },
        {
          "id": "NIC",
          "value": 18867
        },
        {
          "id": "NLD",
          "value": 411590
        },
        {
          "id": "NOR",
          "value": 742812
        },
        {
          "id": "NPL",
          "value": 367834
        },
        {
          "id": "NZL",
          "value": 134293
        },
        {
          "id": "OMN",
          "value": 422459
        },
        {
          "id": "PAK",
          "value": 284545
        },
        {
          "id": "PAN",
          "value": 629349
        },
        {
          "id": "PER",
          "value": 446264
        },
        {
          "id": "PHL",
          "value": 483171
        },
        {
          "id": "PNG",
          "value": 866344
        },
        {
          "id": "POL",
          "value": 478660
        },
        {
          "id": "PRI",
          "value": 897806
        },
        {
          "id": "PRT",
          "value": 237070
        },
        {
          "id": "PRY",
          "value": 435038
        },
        {
          "id": "QAT",
          "value": 966591
        },
        {
          "id": "ROU",
          "value": 566469
        },
        {
          "id": "RUS",
          "value": 388387
        },
        {
          "id": "RWA",
          "value": 644991
        },
        {
          "id": "ESH",
          "value": 866807
        },
        {
          "id": "SAU",
          "value": 853465
        },
        {
          "id": "SDN",
          "value": 187891
        },
        {
          "id": "SDS",
          "value": 660749
        },
        {
          "id": "SEN",
          "value": 312153
        },
        {
          "id": "SLB",
          "value": 26285
        },
        {
          "id": "SLE",
          "value": 884130
        },
        {
          "id": "SLV",
          "value": 994047
        },
        {
          "id": "ABV",
          "value": 914638
        },
        {
          "id": "SOM",
          "value": 594963
        },
        {
          "id": "SRB",
          "value": 514383
        },
        {
          "id": "SUR",
          "value": 680218
        },
        {
          "id": "SVK",
          "value": 746946
        },
        {
          "id": "SVN",
          "value": 375846
        },
        {
          "id": "SWZ",
          "value": 437901
        },
        {
          "id": "SYR",
          "value": 899035
        },
        {
          "id": "TCD",
          "value": 31963
        },
        {
          "id": "TGO",
          "value": 961740
        },
        {
          "id": "THA",
          "value": 234065
        },
        {
          "id": "TJK",
          "value": 788963
        },
        {
          "id": "TKM",
          "value": 672100
        },
        {
          "id": "TLS",
          "value": 899712
        },
        {
          "id": "TTO",
          "value": 379387
        },
        {
          "id": "TUN",
          "value": 317197
        },
        {
          "id": "TUR",
          "value": 878421
        },
        {
          "id": "TWN",
          "value": 253491
        },
        {
          "id": "TZA",
          "value": 386290
        },
        {
          "id": "UGA",
          "value": 727984
        },
        {
          "id": "UKR",
          "value": 822935
        },
        {
          "id": "URY",
          "value": 857896
        },
        {
          "id": "USA",
          "value": 576207
        },
        {
          "id": "UZB",
          "value": 535437
        },
        {
          "id": "VEN",
          "value": 461
        },
        {
          "id": "VNM",
          "value": 855362
        },
        {
          "id": "VUT",
          "value": 594998
        },
        {
          "id": "PSE",
          "value": 862817
        },
        {
          "id": "YEM",
          "value": 113545
        },
        {
          "id": "ZAF",
          "value": 934225
        },
        {
          "id": "ZMB",
          "value": 840454
        },
        {
          "id": "ZWE",
          "value": 729567
        },
        {
          "id": "KOR",
          "value": 958711
        }
      ]
    return (
        <div style={{height:550}}>
            <h1 style={{
                padding : '0px',
                margin : '0px',
                backgroundColor : 'white',
                width : '100%',
                fontSize : '25px',
                textAlign : 'center'
            }}>
                Fitting Rate NM%
            </h1>
            <p style={{
                padding : '0px',
                margin : '10px',
                backgroundColor : 'white',
                width : '100%',
                color : 'gray',
                fontSize : '20px',
                textAlign : 'center'
            }}>
                This is the fitting rate that show how much coverages hivro get for the business domain "무인 매장" 
            </p>
            <div style={{
                    padding : '0px',
                    margin : '10px',
                    width : '100%',
                    display : 'flex'
                }}>
                <div style={{
                    padding : '0px',
                    margin : '10px',
                    height : '380px',
                    width : '50%',
                }}>
                    <h1 style={{
                        padding : '1px',
                        margin : '1px',
                        backgroundColor : 'white',
                        fontSize : '20px',
                        textAlign : 'center'
                    }}>In HiVro</h1>
                    <p style={{
                        padding : '5px',
                        margin : '5px',
                        backgroundColor : 'white',
                        fontSize : '15px',
                        textAlign : 'center'
                    }}>현재 HiVro 비즈니스 맵</p>
                    <MyResponsiveChoroplethCanvas data={data}/>
                </div>
                <div style={{
                    padding : '0px',
                    margin : '10px',
                    height : '380px',
                    width : '50%'
                }}>
                    <h1 style={{
                        padding : '1px',
                        margin : '1px',
                        backgroundColor : 'white',
                        fontSize : '20px',
                        textAlign : 'center'
                    }}>Out HiVro</h1>
                    <p style={{
                        padding : '5px',
                        margin : '5px',
                        backgroundColor : 'white',
                        fontSize : '15px',
                        textAlign : 'center'
                    }}>전세계 무인매장 비즈니스 맵</p>
                    <MyResponsiveChoroplethCanvas data={data2}/>
                </div>
            </div>
            <h2 style={{
                padding : '0px',
                marginTop : '60px',
                backgroundColor : 'white',
                width : '100%',
                fontSize : '20px',
                textAlign : 'center'
            }}>
            In this Month, It is growing rapidly the "무인 매장" business opportunities in HongKong, Germany, and French.
            </h2>
        </div>
    )
}

export default Content_A


