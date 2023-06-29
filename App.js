import BottomNav from './BottomNav';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.ImageContainer}>
        <Image source={{ uri: `https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpZA7QOK.png` }} style={styles.image} />
      </View>

      <ScrollView style={{ marginBottom: 20 }}>
        <View style={styles.PremiumAlertContainer}>
          <Image source={{ uri: `https://images.chesscomfiles.com/uploads/v1/article/28733.7cd7824b.668x375o.325d58c4fd53@2x.png` }} style={styles.PremiumContainerImage} />
          <View style={styles.PremiumTextContainer}>
            <Text style={styles.PremiumTextTitle}>Try Premium</Text>
            <Text style={styles.PremiumTextDescription}>
              Play your best chess!
            </Text>
          </View>
        </View>

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://cdn-icons-png.flaticon.com/512/8140/8140094.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Stats</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://img.freepik.com/free-icon/user_318-563642.jpg?w=360` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Profile</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://curtisward.com/media/wysiwyg/infohub/brush_shapes.jpg` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Theme</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Award</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://www.clker.com/cliparts/2/q/B/V/A/Q/system-users-hi.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Friends</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://play-lh.googleusercontent.com/c5HiVEILwq4DqYILPwcDUhRCxId_R53HqV_6rwgJPC0j44IaVlvwASCi23vGQh5G3LIZ` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Messages</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://cdn-icons-png.flaticon.com/512/771/771203.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Setting</Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#272421', height: 45, marginTop: -35 }}>
          <Text style={{ fontSize: 16, color: '#C1C5C4', fontWeight: 'bold', marginLeft: 30, marginTop: 10 }}>Learn</Text>
        </View>

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://upload.wikimedia.org/wikipedia/commons/8/8b/Light-bulb.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Insights</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://itsengg.edu.in/mission.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Vision</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://raw.githubusercontent.com/github/explore/d744245de144b89f3e3462949e08bfc91eda7fcf/topics/youtube/youtube.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Videos</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://static.wikia.nocookie.net/4pc/images/8/8d/Alibaba-rider.png/revision/latest/thumbnail/width/360/height/360?cb=20211017045423` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Solo Chess</Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#272421', height: 45, marginTop: -35 }}>
          <Text style={{ fontSize: 16, color: '#C1C5C4', fontWeight: 'bold', marginLeft: 30, marginTop: 10 }}>Connect</Text>
        </View>

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://static.vecteezy.com/system/resources/previews/014/075/425/original/3d-golden-trophy-awards-for-winners-of-sports-events-success-concept-png.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Events</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://cdn-icons-png.flaticon.com/512/3150/3150115.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Leaderboard</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkccPSCCS6Uy3zEaLubALYwUviAGQkRgvb3Q&usqp=CAU` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Player League</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://www.chess.com/bundles/web/images/social/share-tv-index.923f18ca.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>ChessTV</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNARGQX71ImWPDOdeInUXUF3_R-LD2AnrQsLki_gJFFypDv7pBjL5GeFA0Wivgw3Lhlk&usqp=CAU` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Article</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://static.vecteezy.com/system/resources/previews/015/723/951/original/binoculars-object-illustration-png.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Watch</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://it-maniacs.com/wp-content/uploads/2021/07/discussion-forums.jpg` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Forums</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8yIr0PCJS6sjQm0Z7txfzInWl3hJ7JpETT2eNbIG4-4ARqpfwzLWHxpP4X21A55JX4A&usqp=CAU` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Clubs</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://static.vecteezy.com/system/resources/thumbnails/002/120/140/small/breaking-news-live-tv-label-logo-template-design-illustration-vector.jpg` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>News</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkOA2uPmIO4JJVPoaYH5L2Ih8wzVWarVs9fRnL_Bkim8_LaH_zdAV7zq66oNQJ8Gh42I&usqp=CAU` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Other App</Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#272421', height: 45, marginTop: -35 }}>
          <Text style={{ fontSize: 16, color: '#C1C5C4', fontWeight: 'bold', marginLeft: 30, marginTop: 10 }}>Account</Text>
        </View>

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://www.shutterstock.com/image-vector/diamond-vector-260nw-62043502.jpg` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Membership</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://cdn-icons-png.flaticon.com/512/1041/1041891.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Report Problem</Text>
          </View>
        </View>
        <View style={styles.hr} />

        <View style={styles.MenuContainer}>
          <Image source={{ uri: `https://i.pinimg.com/originals/58/0f/13/580f139b3ac232030a812614cfc8585b.png` }} style={styles.MenuContainerImage} />
          <View style={styles.MenuTextContainer}>
            <Text style={styles.MenuTextTitle}>Help</Text>
          </View>
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2926',
    marginTop: 30,
  },
  ImageContainer: {
    alignItems: 'center',
    backgroundColor: '#272421',
  },
  image: {
    marginTop: 5,
    marginBottom: 5,
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  PremiumAlertContainer: {
    backgroundColor: '#0096C6',
    color: 'white',
    height: 75,
    marginHorizontal: 18,
    marginVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  PremiumContainerImage: {
    width: 100,
    height: 70,
    marginHorizontal: 10,
  },
  PremiumTextContainer: {
    flex: 1,
    marginTop: 15,
  },
  PremiumTextTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  PremiumTextDescription: {
    fontSize: 13,
    color: 'white',
    marginTop: 3
  },
  MenuContainer: {
    color: 'white',
    height: 75,
    marginHorizontal: 18,
    marginBottom: 15,
    marginTop: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  MenuContainerImage: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  MenuTextContainer: {
    height: 50,
    justifyContent: 'center',
    marginLeft: 10
  },
  MenuTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: -35,
    marginHorizontal: 30,
    width: '87%'
  },
});
