// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/chord
import { ResponsiveChord } from '@nivo/chord'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveChord = ({ matrix /* see matrix tab */ }) => (
    <ResponsiveChord
        matrix={matrix}
        keys={[ '고객 식별', '무인 결제', '재고 관리', '광고 배포', '관심사 분석' ]}
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        valueFormat=".2f"
        padAngle={0}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0}
        arcOpacity={1}
        arcBorderWidth={5}
        arcBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        ribbonOpacity={0.5}
        ribbonBorderWidth={0}
        ribbonBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        enableLabel={true}
        label="id"
        labelTextSize={30}
        labelOffset={12}
        labelRotation={-90}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', '0.4' ] ] }}
        colors={{ scheme: 'nivo' }}
        isInteractive={true}
        arcHoverOpacity={1}
        arcHoverOthersOpacity={0.25}
        ribbonHoverOpacity={0.75}
        ribbonHoverOthersOpacity={0.25}
        animate={true}
        motionStiffness={90}
        motionDamping={7}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 100,
                itemWidth: 75,
                itemHeight: 52,
                itemsSpacing: 0,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

export default MyResponsiveChord