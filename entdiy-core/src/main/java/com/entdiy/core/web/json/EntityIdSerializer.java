/**
 * Copyright © 2015 - 2017 EntDIY JavaEE Development Framework
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.entdiy.core.web.json;

import java.io.IOException;
import java.io.Serializable;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.data.domain.Persistable;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class EntityIdSerializer extends JsonSerializer<Persistable<? extends Serializable>> {

    @Override
    public void serialize(Persistable<? extends Serializable> value, JsonGenerator jgen, SerializerProvider provider)
            throws IOException, JsonProcessingException {
        if (value != null) {
            jgen.writeStartObject();
            jgen.writeFieldName("id");
            jgen.writeString(ObjectUtils.toString(value.getId()));
            jgen.writeEndObject();
        }
    }
}
