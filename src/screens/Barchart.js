import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor
} from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';

class BarChartScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            legend: {
                enabled: false,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 15,
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5
            },
            data: {
                dataSets: [{
                    values: [{ y: 100 }, { y: 105 }, { y: 102 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }],
                    label: 'Bar dataSet',
                    config: {
                        color: processColor('teal'),
                        barShadowColor: processColor('lightgrey'),
                        highlightAlpha: 90,
                        highlightColor: processColor('red'),
                    }
                }],

                config: {
                    barWidth: 0.5,
                }
            },
            //highlights: [{ x: 1 }, { x: 6 }],
            xAxis: {
                valueFormatter: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                granularityEnabled: true,
                granularity: 1,
            }
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({ ...this.state, selectedEntry: null })
        } else {
            this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
        }

        console.log(event.nativeEvent)
    }


    render() {
        return (
            <View style={{ flex: 1, margin: 40 }}>

                <View style={{ height: 80 }}>
                    <Text> selected entry</Text>
                    <Text> {this.state.selectedEntry}</Text>
                </View>


                <View style={styles.container}>
                    <BarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        animation={{ durationX: 2000 }}
                        legend={this.state.legend}
                        gridBackgroundColor={processColor('#ffffff')}
                        visibleRange={{ x: { min: 3, max: 3 } }}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        onSelect={this.handleSelect.bind(this)}
                        highlights={this.state.highlights}
                        onChange={(event) => console.log(event.nativeEvent)}
                        yAxis={{ spaceTop: true, spaceBottom: 25 }}
                        drawBarShadow={false}

                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    chart: {
        flex: 1
    }
});

export default BarChartScreen;