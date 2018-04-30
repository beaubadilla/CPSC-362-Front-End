<template>
<div>
    <ais-index
        app-id='46REFXDXXW'
        api-key='053b6f707307dc7985393b5c0eec6cbd'
        index-name='notes'>

        <ais-input placeholder="Search notes..." id="SearchBar"></ais-input>
           <ais-results>
              <template scope="{ result }">
                <div>
                  <ul>
                    <li>{{result.title}}</li>
                  </ul>
                </div>
              </template>
           </ais-results>
    </ais-index>
</div>
</template>
