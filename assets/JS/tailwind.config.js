tailwind.config={
    theme:{
        fontFamily:{
            'myriad':['Myriad Pro'],
            'bebasNeue':['Bebas Neue'],
            'inter':['Inter'],
            'dm_sans':['DM Sans'],
            'dark_grotesque':['Darker Grotesque'],
            'Satoshi':['Satoshi'],
            'barlow':['Barlow']
        },
        extend:{
            animation:{
                'loop-scroll':'loop-scroll 25s linear infinite',
            },
            keyframes:{
                'loop-scroll':{
                    from:{transform:'translateX(0)'},
                    to:{transform:'translateX(-100%)'},
                }
            },
            colors:{
                '1-color':'#EFEFEF',
                 '2-color':'#545454',
                 '3-color':'#F982FC',
                '4-color':'#222222',
                '5-color':'#57575A',
                '6-color':'#F2F0F0',
                '7-color':'#7F7F7F',
                '8-color':'#333333',
                '9-color':'#0674B7'
            },
            screens:{
                '3xl':'2560px'
            }

            
        }
    }
}