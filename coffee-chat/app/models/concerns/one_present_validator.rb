class OnePresentValidator < ActiveModel::Validator
    def validate(record)
        unless no_id_present(record).any? { |attr| record.attribute_present?(attr) }
            record.errors.add(record.model_name.human.downcase!, 'must contain at least one attribute')
        end
    end

    private
    def no_id_present(record)
        record.attribute_names.reject!{ |attr| attr.include?('_id') }
    end
end