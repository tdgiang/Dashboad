import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, processColor
} from 'react-native';

import { BarChart } from 'react-native-charts-wrapper';

class StackedBarChartScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            legend: {
                enabled: true,
                textSize: 14,
                form: "SQUARE",
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                wordWrapEnabled: true
            },
            data: {
                dataSets: [{
                    values: [{ y: [40, 30] }, { y: [10, 20] }, { y: [30, 20] }, { y: [30, 50] }],
                    label: '',
                    config: {
                        colors: [processColor('#C0FF8C'), processColor('#FFF78C')],
                        stackLabels: ['Engineering', 'Sales'],

                    }
                },

                ],
                config: {
                    barWidth: 2,
                    group: {
                        fromX: 10,
                        groupSpace: 10,
                        barSpace: 10,
                    }
                }


            },


            xAxis: {
                valueFormatter: ['01', '02', '03', '04'],
                granularityEnabled: true,
                granularity: 1,
                gridDashedLine: {
                    lineLength: 0,
                    spaceLength: 10,
                    phase: 0
                },
                textSize: 20,
                position: 'BOTTOM_INSIDE',

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
                        xAxis={this.state.xAxis}
                        config={this.state.config}
                        data={this.state.data}
                        legend={this.state.legend}
                        drawValueAboveBar={false}
                        borderColor={processColor('#C0FF8C')}
                        visibleRange={{ x: { min: 3, max: 3 } }}
                        marker={{
                            enabled: false,
                        }}
                        onSelect={this.handleSelect.bind(this)}
                        onChange={(event) => console.log(event.nativeEvent)}
                        chartDescription={{ text: "" }}
                        drawBorders={false}

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
        flex: 1,
        backgroundColor: 'white',
    }
});


export default StackedBarChartScreen;