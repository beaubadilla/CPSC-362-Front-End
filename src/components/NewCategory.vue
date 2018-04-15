<template>
    <v-container>
        <h3 class="my-3">New Category</h3>
        <v-card>

            <v-container fluid>
              <v-layout column>
                <v-flex xs8>
                  <v-text-field
                    name="input-1"
                    label="Name"
                    id="testing"
                  ></v-text-field>
                </v-flex>
              </v-layout>
             </v-container>

            <v-card-actions>
              <v-btn color="orange lighten-1" dark>Create</v-btn>
            </v-card-actions>


        </v-card>
    </v-container>
</template>
