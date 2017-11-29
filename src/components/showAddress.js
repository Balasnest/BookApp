import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 12.9150737;
const LONGITUDE = 77.5860036;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class ShowAddress extends Component {

	constructor(props) {
        super(props);
        this.state = {
            coordinate: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
            },
        };
	}

    animate() {
        const { coordinate } = this.state;
        coordinate.timing({
          latitude: LATITUDE + ((Math.random() - 0.5) * (LATITUDE_DELTA / 2)),
          longitude: LONGITUDE + ((Math.random() - 0.5) * (LONGITUDE_DELTA / 2)),
        }).start();
    }

    componentWillMount(){
        this.setState({
            coordinate: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
            }
        });
    }

	render() {
		const  { container, map, mapView, center } = styles;
		return(
			<View>
                <View style={mapView}>
                    <MapView
                      style={map}
                      initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                      }}
                    >
                      <MapView.Marker.Animated
                        coordinate={this.state.coordinate}
                      />
                    </MapView>
                </View>

                <TouchableOpacity style={[center,{width: screen.width, height: 40, backgroundColor: 'red'}]}> 
                        <Text>Pay Now</Text>
                </TouchableOpacity>
            </View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	},
	mapView:{
        
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#000",
        borderWidth: 1,
        margin: 5,
        height: screen.height-60,
        
    },
    map: {
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default ShowAddress;