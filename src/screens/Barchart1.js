import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor
} from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';


export default class Barchart1 extends Component {
    constructor() {
        super();
        this.state = {
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
                    barWidth: 0.8,

                },
            },
            xAxis: {
                granularityEnabled: true,
                granularity: 10,
                // axisMaximum: 15,
                // axisMinimum: 0,
                position: 'BOTTOM',
                enabled: false
            },
            yAxis: {
                left: {
                    axisLineColor: processColor('red'),
                    gridColor: processColor('blue'),
                    // granularity: 5,
                    // axisMaximum: 25,
                    // axisMinimum: 0,
                },
                right: {
                    enabled: false,
                    granularity: 10,
                    axisMaximum: 10,
                    axisMinimum: 0,
                    axisLineColor: processColor('black'),
                    drawGridLines: false,
                }
            },
            description: {
                text: ''

            },
            // legend: {
            //     enabled: false,
            // },
            // legendStatement
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }} >
                <BarChart
                    style={styles.chart}
                    data={this.state.data}
                    xAxis={this.state.xAxis}
                    yAxis={this.state.yAxis}
                    animation={{ durationX: 2000 }}
                    gridBackgroundColor={processColor('#ffffff')}
                    visibleRange={{ x: { min: 5, max: 5 } }}
                    drawBarShadow={false}
                    drawValueAboveBar={true}
                    drawHighlightArrow={true}
                    marker={this.state.marker}
                    chartDescription={this.state.description}
                    legend={this.state.legend}

                    // disable zoom, drag
                    scaleEnabled={false}
                    doubleTapToZoomEnabled={false}
                    pinchZoom={false}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    chart: {
        height: 300,
        width: 320,
        marginTop: 20,
        alignSelf: 'center',
    },

});
