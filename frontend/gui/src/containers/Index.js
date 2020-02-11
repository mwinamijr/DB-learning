import React from 'react';
import learn from '../learn.jpg'
import '../index.css'

class Index extends React.Component {
    render() {
        return(
            <div className="index">
                <h2>Welcome to the DB-Learning!</h2>
                <img src={learn} alt="" style={{ width:'100%', height: '300px' }} />
                
                <h3>Introduction</h3>
                <p>This site provides you with well prepared learning materials which 
                    covers at most every requirements accoring to your learning syllabus.
                </p>
                <p>
                    <em>"We provide you leaning materials of your level."</em>
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lobortis convallis. Vestibulum nec arcu magna. Vestibulum mattis gravida magna, quis vulputate quam. Suspendisse laoreet urna sed libero tempus fringilla. Etiam aliquet lorem sapien, at tincidunt augue vulputate sit amet. Aenean sit amet eros tortor. Curabitur convallis turpis ac lectus pulvinar, ut pretium arcu placerat. Phasellus iaculis a ipsum ac tempus. Aenean hendrerit nibh vel purus auctor rutrum. Etiam pellentesque augue in tellus ullamcorper, eu consequat orci viverra. Praesent leo dui, sollicitudin in sodales id, commodo id purus. In quis lorem nec sem volutpat vehicula. Integer fermentum, turpis eu ultrices dignissim, risus lorem interdum lacus, eget scelerisque massa felis nec neque. Donec enim nisl, lobortis vitae erat et, mollis volutpat orci. Nam dictum ante id nisl condimentum pretium. Integer id nulla rutrum, finibus nisi ac, pellentesque enim.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean euismod, massa sit amet maximus facilisis, purus ante pretium neque, in lobortis nibh sem in lacus. Nulla ligula metus, scelerisque quis erat eget, mattis aliquam libero. Nulla dictum odio a tincidunt faucibus. Donec suscipit nulla vitae viverra bibendum. Aenean pretium, risus sit amet lobortis scelerisque, eros magna ultrices tellus, et mattis est nisi et magna. Integer quis magna magna. Donec eget tellus in lacus rutrum varius. Maecenas congue enim felis, eget rutrum enim ultricies non.

Phasellus id leo vitae nisl lobortis elementum. Nunc ac dolor ut elit finibus rhoncus. Quisque auctor mollis tortor vel placerat. Donec feugiat molestie urna, quis lacinia leo eleifend nec. Nulla quis iaculis eros, eget rutrum quam. Etiam sollicitudin interdum mauris, at elementum diam pretium quis. Etiam sed facilisis orci, et condimentum diam.
                </p>
            </div>
        )
    }
}

export default Index;