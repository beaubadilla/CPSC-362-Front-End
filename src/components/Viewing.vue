<template>
    <div>
        <h1>File Viewer</h1>
        <div>
            <iframe id="viewer" src="https://docs.google.com/viewer?url=http://titannotes.jonmouchou.com/storage/docs/IrX9dnTwEn0BI5RMzpkHkXbbyLWKH8hWE65rS8xK.jpeg&embedded=true" style="width:600px; height:500px;" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
export default {
	data: function ()  {
		return {
			begURL: 'https://docs.google.com/viewer?url=',
			docID: '',
			endURL: '&embedded=true',
			srcURL: ''
		}
	},
	methods: {
		createSRC () {
			// User selects note from search function. Grab ID from selected note. Append. Change src attribute

			//Grab ID
			//// docID = 
			srcURL = this.begURL + this.docID + this.endURL

			var newSRC = document.getElementById('viewer')
			newSRC.src = this.srcURL
		}
	},
	props: [
		'documentID'
	]
}
</script>
