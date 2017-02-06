# JSON representation of a questionnaire

To be visualized, a questionnaire needs to comply to the following [XML schema](./schema.md). The transformation from `json` to `xml` by the backend relies on the following rules:
- names are transformed to lowercase and prefixed by '_';
- elements with `maxMaxOccurs` set to `unbounded` are represented as an array and the name is pluralized.

For instance, if if we expect in the schema the follwoing element:
```xml
<xs:element name="Child" type="ComponentType" minOccurs="0" maxOccurs="unbounded"/>
```
it will represented in `json` like this:
```json
{
  "_children": [...]
}
```

TODO validate from a server perspective, these rules do not seem to work for labels, which should be serialized as `_labels` and not `_label`

Hence, in `json`, it can be represented as follows:

```json
{  
   "_id":"iyd6rsr8",
   "_name":"FIRSTQUESTIONNAIRE",
   "_label":["First questionnaire"],
   "_declarations":[],
   "_goTos":[],
   "_controls":[],
   "_genericName":"QUESTIONNAIRE",
   "_children":[  
      {  
         "_id":"iyd6eckg",
         "_name":"SEQ1",
         "_label":["About you"],
         "_declarations":[],
         "_goTos":[],
         "_controls":[],
         "_genericName":"MODULE",
         "_children":[  
            {  
               "_id":"iyd6pe0m",
               "_name":"QUESTION11",
               "_label":["##{\"label\":\"How old are you ?\\n\",\"conditions\":[]}\nHow old are you ?\n"],
               "_declarations":[],
               "_goTos":[],
               "_controls":[],
               "_questionType":"SIMPLE",
               "_responses":[  
                  {  
                     "_mandatory":false,
                     "_datatype":{   
                        "_typeName":"NUMERIC",
                        "_minimum":0,
                        "_maximum":120,
                        "_decimals":null,
                        "_type":"NumericDatatypeType"
                     }
                  }
               ],
               "_type":"QuestionType"
            },
            {  
               "_id":"iyd6gyfz",
               "_name":"QUESTION12",
               "_label":["##{\"label\":\"Are you **happy** ?\\n\",\"conditions\":[]}\nAre you **happy** ?\n"],
               "_declarations":[],
               "_goTos":[],
               "_controls":[],
               "_questionType":"SINGLE_CHOICE",
               "_responses":[  
                  {  
                     "_codeListReference":"iyd6rjy6",
                     "_mandatory":false,
                     "_datatype":{  
                        "_typeName":"TEXT",
                        "_maxLength":1,
                        "_pattern":"",
                        "_type":"TextDatatypeType",
                        "_visHint":"CHECKBOX"
                     }
                  }
               ],
               "_type":"QuestionType"
            }
         ],
         "_depth":1,
         "_type":"SequenceType"
      },
      {  
         "_id":"iyd6vaen",
         "_name":"SEQ2",
         "_label":[  
            "About your job"
         ],
         "_declarations":[],
         "_goTos":[],
         "_controls":[],
         "_genericName":"MODULE",
         "_children":[  
            {  
               "_id":"iyd6xtcq",
               "_name":"QUESTION21",
               "_label":["##{\"label\":\"Do you have a job ?\\n\",\"conditions\":[]}\nDo you have a job ?\n"],
               "_declarations":[],
               "_goTos":[],
               "_controls":[],
               "_questionType":"SIMPLE",
               "_responses":[  
                  {  
                     "_mandatory":false,
                     "_datatype":{  
                        "_typeName":"BOOLEAN",
                        "_type":"BooleanDatatypeType"
                     }
                  }
               ],
               "_type":"QuestionType"
            }
         ],
         "_depth":1,
         "_type":"SequenceType"
      }
   ],
   "_depth":0,
   "_type":"SequenceType",
   "_agency":"fr.insee",
   "_survey":{  
      "_agency":"fr.insee",
      "_name":"POPO",
      "_id":"iyd6pp45"
   },
   "_componentGroups":[  
      {  
         "_name":"PAGE_1",
         "_label":"Components for page 1",
         "_Member":[  
            "iyd6eckg",
            "iyd6pe0m",
            "iyd6gyfz",
            "iyd6vaen",
            "iyd6xtcq"
         ],
         "_id":"iyd6m2c7"
      }
   ],
   "_codeLists":{  
      "_codeList":[  
         {  
            "_id":"iyd6rjy6",
            "_name":"",
            "_label":"mood",
            "_codes":[  
               {  
                  "_label":"unhappy",
                  "_value":""
               },
               {  
                  "_label":"happy",
                  "_value":""
               },
               {  
                  "_label":"very happy",
                  "_value":""
               }
            ]
         }
      ],
      "_codeListSpecification":[]
   }
}
```