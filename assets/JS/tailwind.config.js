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
                "blink": 'blink 2s infinite',
                
            },
            keyframes:{
                'loop-scroll':{
                    from:{transform:'translateX(0)'},
                    to:{transform:'translateX(-100%)'},
                },
                blink: {
                    '0%, 49%': { backgroundColor: '#000000' },
                    '50%, 99%': { backgroundColor: 'transparent' },
                    '100%': { backgroundColor: '#000000' },
                  },
               
              
               
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
                '9-color':'#0674B7',
                '10-color':'#F3ED32',
                '11-color':'#EC452E',
                '12-color':'#49449C',
                '13-color':'#399AC0',
                '14-color':'#78338C',
                '15-color':'#D9467A',
                '16-color':'#049CE0',
                '17-color':'#E6475D',
                '18-color':'#828282',
                '19-color':'#E1E1E1',
                '20-color':'#1E6EB3',
                '21-color':'#F28531',
                '22-color':'#E0E0E0'
            },
            screens:{
                '3xl':'2560px',
                '1920':'1920px'
            }

            
        }
    }
}