import React, {useState} from 'react'
import './App.css'
import level1 from './pokemon/10.png'
import level2 from './pokemon/213.png'
import level3 from './pokemon/568.png'
import level4 from './pokemon/287.png'
import level5 from './pokemon/206.png'
import level6 from './pokemon/79.png'
import level7 from './pokemon/399.png'
import level8 from './pokemon/422-west.png'
import level9 from './pokemon/349.png'
import level10 from './pokemon/4.png'
import level11 from './pokemon/559.png'
import level12 from './pokemon/418.png'
import level13 from './pokemon/50.png'
import level14 from './pokemon/280.png'
import level15 from './pokemon/143.png'
import level16 from './pokemon/441.png'
import level17 from './pokemon/214.png'
import level18 from './pokemon/335.png'
import level19 from './pokemon/142.png'
import level20 from './pokemon/93.png'
import level21 from './pokemon/404.png'
import level22 from './pokemon/356.png'
import level23 from './pokemon/61.png'
import level24 from './pokemon/112.png'
import level25 from './pokemon/197.png'
import level26 from './pokemon/286.png'
import level27 from './pokemon/426.png'
import level28 from './pokemon/530.png'
import level29 from './pokemon/212.png'
import level30 from './pokemon/260.png'
import level31 from './pokemon/545.png'
import level32 from './pokemon/409.png'
import level33 from './pokemon/373.png'
import level34 from './pokemon/609.png'
import level35 from './pokemon/68.png'
import level36 from './pokemon/445.png'
import level37 from './pokemon/376.png'
import level38 from './pokemon/248.png'
import level39 from './pokemon/448.png'
import level40 from './pokemon/150.png'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Input from '@material-ui/core/Input'
import Slider from '@material-ui/core/Slider'
import Grid from '@material-ui/core/Grid'
import {createMuiTheme, TextField} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'

const baseTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red
    }
})

const App = () => (
    <ThemeProvider theme={baseTheme}>
        <VictoryRoad/>
    </ThemeProvider>
)
const useStyles = makeStyles(theme => ({
    grid: {
        backgroundColor: '#F5F5F5',
        minHeight: '100vh'
    },
    card: {
        textAlign: 'center'
    },
    typography: {
        fontSize: '3em'
    },
    textField: {
        [theme.breakpoints.up('md')]: {
            fontSize: '2em'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3em'
        }
    },
    wrapper: {
        [theme.breakpoints.up('md')]: {
            display: 'inline'
        }
    },
    redWrapper: {
        padding: '0px 0px 0px 20px',
        color: '#FE0100',
        [theme.breakpoints.up('md')]: {
            display: 'inline'
        }
    },
    yellowWrapper: {
        padding: '0px 0px 0px 20px',
        color: '#FBC211',
        [theme.breakpoints.up('md')]: {
            display: 'inline'
        }
    },
    greenWrapper: {
        padding: '0px 0px 0px 20px',
        color: '#007F00',
        [theme.breakpoints.up('md')]: {
            display: 'inline'
        }
    },
    goalLevel: {
        [theme.breakpoints.up('md')]: {
            padding: '0px 0px 0px 20px',
            fontSize: '5em'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4em'
        }
    }
}))

function VictoryRoad() {
    const images = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10,
        level11, level12, level13, level14, level15, level16, level17, level18, level19, level20,
        level21, level22, level23, level24, level25, level26, level27, level28, level29, level30,
        level31, level32, level33, level34, level35, level36, level37, level38, level39, level40]
    const levels = [0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000,
        55000, 65000, 75000, 85000, 100000, 120000, 140000, 160000, 185000,
        210000, 260000, 335000, 435000, 560000, 710000, 900000, 1100000, 1350000, 1650000,
        2000000, 2500000, 3000000, 3750000, 4750000, 6000000, 7500000, 9500000, 12000000, 15000000, 20000000]
    const [currentXP, setCurrentXP] = useState(0)
    const [goalLevel, setGoalLevel] = useState(40)
    const classes = useStyles()
    const shouldFullWidth = useMediaQuery(theme => theme.breakpoints.down('sm'))

    const handleXPInputChange = event => {
        if (event.target.value > 20000000) {
            setCurrentXP(20000000)
        } else if (event.target.value < 0) {
            setCurrentXP(0)
        } else {
            setCurrentXP(event.target.value === '' ? '' : Number(event.target.value))
        }
    }

    const handleSliderChange = (event, newValue) => {
        setCurrentXP(newValue)
    }

    const calculateLevel = () => {
        return levels.filter(level => level <= currentXP).length
    }

    const calculateImage = () => {
        return images[calculateLevel() - 1]
    }

    const handleStyle = () => {
        if (currentXP / levels[goalLevel - 1] > 0.9) {
            return 'green'
        } else if (currentXP / levels[goalLevel - 1] > 0.5) {
            return 'yellow'
        } else {
            return 'red'
        }
    }

    const calculateRemaining = () => {
        if (goalLevel === 0 || typeof goalLevel !== 'number' || levels[goalLevel - 1] - currentXP < 0) {
            return 0
        }
        return (levels[goalLevel - 1] - currentXP).toLocaleString()
    }

    const handleGoalInputChange = event => {
        if (event.target.value > 40) {
            setGoalLevel(40)
        } else if (event.target.value < 0) {
            setGoalLevel(0)
        } else {
            setGoalLevel(event.target.value === '' ? '' : Number(event.target.value))
        }
    }

    return (
        <React.Fragment>
            <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justify="center"
                className={classes.grid}
            >
                <Grid item sm={6} xs={12}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.typography}>
                                Pokemon Go XP Calculator
                            </Typography>

                            <TextField
                                fullWidth={shouldFullWidth}
                                value={currentXP}
                                label="Current XP"
                                size={'medium'}
                                onChange={handleXPInputChange}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    className: classes.textField,
                                    max: levels[goalLevel - 1],
                                    type: 'number',
                                    'aria-labelledby': 'input-slider'
                                }}
                            />

                            <Slider
                                value={typeof currentXP === 'number' ? currentXP : 0}
                                onChange={handleSliderChange}
                                max={levels[goalLevel - 1]}
                                min={0}
                                step={1}
                                color={'secondary'}
                                aria-labelledby='input-slider'
                            />

                            <Typography variant="h5" component="h2">
                                Current level: {calculateLevel()}
                            </Typography>

                            <img src={calculateImage()} alt="Pokemon"/>

                            <Typography
                                className={classes.typography}
                                component="h2"
                                variant="h5"
                            >
                                <div className={classes.wrapper}>
                                    XP needed:
                                </div>
                                {handleStyle() === 'green' &&
                                <div className={classes.greenWrapper}>
                                    {calculateRemaining()}
                                </div>
                                }
                                {handleStyle() === 'yellow' &&
                                <div className={classes.yellowWrapper}>
                                    {calculateRemaining()}
                                </div>
                                }
                                {handleStyle() === 'red' &&
                                <div className={classes.redWrapper}>
                                    {calculateRemaining()}
                                </div>
                                }
                            </Typography>

                            <Typography
                                variant="h5"
                                component="h2"
                                display="inline"
                                className={classes.typography}
                            >
                                To level:
                            </Typography>
                            <Input
                                value={goalLevel}
                                fullWidth={shouldFullWidth}
                                onChange={handleGoalInputChange}
                                inputProps={{
                                    step: 1,
                                    min: 1,
                                    max: 40,
                                    className: classes.goalLevel,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider'
                                }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default App


