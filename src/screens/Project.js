import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, processColor,
    Dimensions
} from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';
const { height, width } = Dimensions.get('window');

const legendStatement = [
    {
        label: "Tài sản",
        color: 'red'
    },
    {
        label: "Hao mòn lũy kế",
        color: 'blue'
    }

];


class StackedBarChartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            legendStatement,
            legend: {
                enabled: true,
                textSize: 12,
                form: "SQUARE",
                formSize: 12,
                xEntrySpace: 50,
                yEntrySpace: 10,
                wordWrapEnabled: true,
                formToTextSpace: 10,
                fontWeight: 1,
            },
            data: {
                dataSets: [{
                    values: [{ y: [40, 30] }, { y: [10, 20] }, { y: [30, 20] },
                    { y: [30, 50] }, { y: [30, 50] }, { y: [30, 50] },
                    { y: [30, 50] }, { y: [30, 50] }, { y: [30, 50] },
                    { y: [30, 50] }, { y: [30, 50] }, { y: [30, 50] }],
                    label: '',
                    config: {
                        colors: [processColor(legendStatement[0].color), processColor(legendStatement[1].color)],
                        stackLabels: [legendStatement[0].label, legendStatement[1].label],
                        valueTextSize: 0
                    }
                },
                ],
                config: {
                    barWidth: 0.5,
                }
            },
            xAxis: {
                valueFormatter: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                granularityEnabled: true,
                granularity: 1,
                gridDashedLine: {
                    lineLength: 0,
                    spaceLength: 10,
                    phase: 0
                },
                textSize: 25,
                position: 'BOTTOM',
                //Trục bên dưới  trục x
                drawAxisLine: false
            },
            yAxis: {
                left: {
                    //Màu cột y
                    axisLineColor: processColor('gray'),
                    //Màu kẻ ngang
                    gridColor: processColor('black'),
                    //Khoảng cách số
                    //  granularity: 25,

                },
                right: {
                    enabled: false,
                },

            },
            legend: {
                enabled: false,
            }

        };
    }

    handleSelect(event) {
        console.log(event.nativeEvent)
    }

    render() {
        const { legendStatement } = this.state;
        const { containerLegend, chart, box } = styles
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ marginHorizontal: 20 }} >
                    <Text style={styles.title}  >Đơn vị tính:Triệu VNĐ</Text>
                    <BarChart
                        legend={{ enabled: false }}
                        style={chart}
                        xAxis={this.state.xAxis}
                        config={this.state.config}
                        data={this.state.data}
                        legend={this.state.legend}
                        yAxis={this.state.yAxis}
                        visibleRange={{ x: { min: 3, max: 3 } }}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        highlightEnabled={false}
                        onSelect={this.handleSelect.bind(this)}
                        chartDescription={{ text: "" }}
                        drawBorders={false}
                        scaleEnabled={false}
                        doubleTapToZoomEnabled={false}
                        pinchZoom={false}
                    />
                    <View style={containerLegend} >
                        {legendStatement.map(e => (
                            <View key={e.label} style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <View style={[box, { backgroundColor: e.color }]} />
                                <Text>{e.label}</Text>

                            </View>
                        ))}

                    </View>
                </View>





            </View>
        );
    }
}

const styles = StyleSheet.create({
    chart: {
        height: height / 2,
        width: width - 60,
    },
    title: {
        fontSize: 14,
        color: 'black',
        textAlign: 'right'
    },
    containerLegend: {
        marginTop: 20, paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center', flexDirection: 'row'
    },
    box: {
        width: 20,
        height: 12,
        marginRight: 20
    }
});


export default StackedBarChartScreen;