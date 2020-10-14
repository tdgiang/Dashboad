import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, processColor, Dimensions, TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window')

import { BarChart } from 'react-native-charts-wrapper';

class StackedBarChartScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            data: {
                dataSets: [{
                    values: [{ y: [4, 5, 1] }, { y: [2, 2, 0] }, { y: [3, 10, 2] }, { y: [3, 21, 3] }],
                    label: '',
                    config: {
                        colors: [processColor('#E71D36'), processColor('#29BF12'), processColor('#FFBE0B')],
                    },
                    highlightAlpha: 0,
                },
                ],
                config: {
                    barWidth: 0.3,
                }
            },
            xAxis: {
                valueFormatter: ['01/2020', '02/2020', '03/2020', '04/2020'],
                granularityEnabled: true,
                granularity: 1,
                gridDashedLine: {
                    lineLength: 0,
                    spaceLength: 5,
                    phase: 0
                },
                textSize: 12,
                position: 'BOTTOM',
                drawAxisLine: false,


            },
            columnSelect: []
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent.yValues
        if (entry != null)
            this.setState({ columnSelect: entry })
    }

    render() {
        return (

            <View style={{ flex: 1 }}>

                <View style={styles.headers}>
                    <View style={styles.rowBet} >
                        <View style={styles.row} >
                            <View style={[styles.legend, { backgroundColor: '#29BF12' }]} />
                            <Text>Ngày công</Text>
                        </View>
                        <Text>{this.state.columnSelect[1] && this.state.columnSelect[1]}</Text>
                    </View>
                    <View style={styles.rowBet} >
                        <View style={styles.row} >
                            <View style={[styles.legend, { backgroundColor: '#E71D36' }]} />
                            <Text>Ngày nghỉ</Text>
                        </View>
                        <Text>{this.state.columnSelect[0] && this.state.columnSelect[0]}</Text>
                    </View>
                    <View style={styles.rowBet} >
                        <View style={styles.row} >
                            <View style={[styles.legend, { backgroundColor: '#FFBE0B' }]} />
                            <Text>Ngày công OT</Text>
                        </View>
                        <Text>{this.state.columnSelect[2] && this.state.columnSelect[2]}</Text>
                    </View>
                </View>
                <BarChart
                    style={styles.chart}
                    xAxis={this.state.xAxis}
                    yAxis={{
                        axisMinimum: 0,
                        gridLineWidth: 0.4,
                        left: {
                            gridLineWidth: 0.5,
                            axisMinimum: 0,
                            granularity: 0,
                        },
                        right: {
                            enabled: false,
                        },
                    }}
                    legend={{ enabled: false }}
                    data={this.state.data}
                    drawValueAboveBar={false}
                    visibleRange={{ x: { min: 4, max: 4 } }}
                    marker={{
                        enabled: false,
                    }}
                    onSelect={this.handleSelect.bind(this)}
                    chartDescription={{ text: "" }}
                    drawBorders={false}
                    scaleEnabled={false}
                    doubleTapToZoomEnabled={false}
                    pinchZoom={false}

                />
                <View style={[styles.rowBet, { marginHorizontal: 20 }]} >
                    <TouchableOpacity
                        onPress={() => console.log("Pre  month")}
                    >
                        <Text>Hello</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log("Pre  month")}
                    >
                        <Text>Hello</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    styleChart: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    chart: {
        height: height / 2,
        width: width - 60,
        marginRight: 20,
        marginHorizontal: 20
    },
    headers: {
        backgroundColor: '#f2f2f2',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 40,
        marginVertical: 10
    },
    rowBet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    legend: {

        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10
    }
});


export default StackedBarChartScreen;