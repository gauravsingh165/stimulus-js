require "test_helper"

class StiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sti_index_url
    assert_response :success
  end
end
